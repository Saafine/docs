const { getArguments, executionPromise } = require('./custom-utils');
const { getFiles } = require('./get-files');
const { resolve } = require('path');
const path = require('path');

console.log('Usage: node C:/Projects/docs/scripts C:/Some-Videos');

async function runConversion() {
  const dir = getArguments();

  const outputFolder = resolve(dir); // TODO [P. Labus] reanme to root
  console.log('Output folder:', outputFolder);

  const files = await getFiles(dir);
  console.log('Executing conversion for', files);

  const outputFolderX = path.join(outputFolder, '/processed'); // TODO [P. Labus]

  const processedFiles = files.map((file) => [
    file,
    path.join(outputFolder, '/processed', path.relative(dir, file)),
  ]);
  console.log('Processed Files:', processedFiles);

  console.log(outputFolderX);

  await executionPromise(`mkdir ${outputFolderX}`);
  console.log('Processed folder created');

  // for (const file of processedFiles) {
  const [input, output] = processedFiles[0];
  console.log('Converting... ', input);
  if (input === output) throw new Error('Overwrite error');
  console.log('Input:', input);
  console.log('Output:', input);
  const command = `ffmpeg -i ${input} -vcodec libx264 -crf 28 ${output}`;
  await executionPromise(command).catch(console.log);
  // }
}

runConversion();
