#!/usr/bin/env zx
const { getFiles } = require('./get-files');
const { join, relative } = require('path');
import { mkdir } from 'fs/promises';
const sharp = require('sharp');

const outputFolderName = 'processed';

// Usage, from source folder
// 1) Go to source folder: C:/Desktop/my-videos
// 2) Run zx C:/Projects/docs/scripts/image-converter.mjs
async function runConversion() {
  const dir = './';
  const files = await getFiles(dir);

  const failures = [];

  let index = 0;
  for (const file of files) {
    index++;
    console.log(`Running... ${index} / ${files.length}`);
    const input = join(dir, relative(dir, file));
    const inputDir = join(outputFolderName, relative(dir, file), '../');
    const output = join(outputFolderName, relative(dir, file));

    console.log({ input, output, inputDir });

    await mkdir(inputDir, { recursive: true });
    try {
		await convertImage(input, output);
	} catch (e) {
		console.error(e);
		failures.push(input);
	}
  }

  if (failures.length > 0) console.warn('Failures:', failures);

  console.log('File Paths:', files);
  console.log('Total Affected files:', files.length);
  console.log('Make sure all files were converted.');
}

async function convertImage(input, output) {
  return await sharp(input).withMetadata().jpeg({ mozjpeg: true }).toFile(output);
}

runConversion();
