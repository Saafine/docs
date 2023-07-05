#!/usr/bin/env zx
const { getFiles } = require('./get-files');
const { join, relative } = require('path');
const { execShellCommand } = require('./custom-utils.js');
import { mkdir } from 'fs/promises';

const outputFolderName = 'processed';

// Usage, from source folder
// 1) Go to source folder: C:/Desktop/my-videos
// 2) Run zx C:/Projects/docs/scripts/video-converter.mjs
async function runConversion() {
  const dir = './';
  const files = await getFiles(dir);

  for (const file of files) {
    console.log('Running...');
    const input = join(dir, relative(dir, file));
	if (shouldSkipFile(input)) {
	 console.log('Skipping', input);
	 continue;
	}
    const inputDir = join(outputFolderName, relative(dir, file), '../');
    const output = join(outputFolderName, relative(dir, file));

    console.log({ input, output, inputDir });

    await mkdir(inputDir, { recursive: true });
    await execShellCommand(`ffmpeg -i "${input}" -vcodec libx264 -crf 28 "${output}"`);
  }

  console.log('File Paths:', files);
  console.log('Total Affected files:', files.length);
}

function shouldSkipFile(input) {
  const excludeExtensions = ['ini', 'txt'];
  return excludeExtensions.some((ext) => input.endsWith(ext));
}

runConversion();
