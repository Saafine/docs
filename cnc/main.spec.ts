import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { sortBy } from 'lodash';

interface FileBlock {
  type: 'metadata' | 'part' | 'contour' | 'milling' | 'end' | 'comment';
}

function parseContent(content: string) {
  const lines = content.split('\n');

  let partType = 'metadata';
  let parts: string[] = [];

  const result = []

  let yKey: string = '';
  const yMap: Record<string, number> = {};

  for (const line of lines) {
    const type = mapBlockPartToType(line);

    if (partType === 'contour' && line.startsWith('Y')) {
      const value = line.replace('Y=', '').replace('\r', '');
      yMap[yKey] = Number(value);
      yKey = '';
    }

    if (!type) {
      parts.push(line)
      continue;
    }

    if (parts.length > 0) {
      result.push({
        type: partType || type,
        parts
      })
    }

    parts = [line];
    partType = type;
    if (type === 'contour') yKey = line.replace('\r', '');
  }

  result.push({type: partType, parts})

  return { result, yMap };
}

function parseFile(path: string) {
  const content = readFileSync(path, 'utf-8')
  const parsed = parseContent(content);
  const milling = parsed.result.filter(({type}) => type === 'milling');
  const millingSorted = sortBy(milling, (x) => {
    const startKey = x?.parts?.[1]?.replace('EA="', '').replace(/:.+/, '').replace('\r', '');
    const startMap = parsed.yMap;
    const startResult = startMap[`]${startKey}`];
    return startResult
  })

  const noMilling = parsed.result.filter(({type}) => type !== 'milling' && type !== 'end');

  const combined = noMilling.concat(millingSorted).map(({parts}) => parts.join('\n')).concat('!').join('');
  return combined;
}


function mapBlockPartToType(line: string): FileBlock['type'] | null {
  if (isFileStart(line)) return 'metadata';
  if (isFileMetadata(line)) return 'part'
  if (isContourStart(line)) return 'contour'
  if (isMillingStart(line)) return 'milling'
  if (isFileEnd(line)) return 'end'
  if (isComment(line)) return 'comment'

  return null
}

function isFileStart(line: string) {
  return line.startsWith('[H')
}

function isFileMetadata(line: string) {
  return line.startsWith('[001')
}

function isContourStart(line: string) {
  return /^]\d+\r?$/.test(line)
}

function isMillingStart(line: string) {
  return /Konturfraesen\\\r?$/.test(line)
}

function isComment(line: string) {
  return /Kommentar\\\r?$/.test(line)
}

function isFileEnd(line: string) {
  return line.startsWith('!')
}

describe('runner', () => {
  it('should run', () => {
    const path = join(__dirname, 'frezowanie-12-04-2025.mpr');
    const path2 = join(__dirname, 'frezowanie-12-04-2025-sorted.mpr');
    const result = parseFile(path);
    writeFileSync(path2, result)
  });
});
