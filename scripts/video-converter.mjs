#!/usr/bin/env zx
const { getFiles } = require('./get-files');
const { resolve, join, relative } = require('path');
const { executionPromise } = require('./custom-utils.js');
import { mkdir } from 'fs/promises';

const outputFolderName = 'processed';

async function runConversion() {
  const dir = './';
  const files = await getFiles(dir);

  for (const file of files) {
    console.log('Running...');
    const input = join(dir, relative(dir, file));
    const inputDir = join(outputFolderName, relative(dir, file), '../');
    const output = join(outputFolderName, relative(dir, file));

    // console.log({input, output, inputDir});

    await mkdir(inputDir, { recursive: true });
    await executionPromise(`ffmpeg -i ${input} -vcodec libx264 -crf 28 ${output}`);
  }

  console.log('File Paths:', files);
  console.log('Total Affected files:', files.length);
}

runConversion();
