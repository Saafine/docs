const { removeIdeaLineNumberFromPath, getFileNameFromPath, removeSpecFromFile } = require('./string.utils');
const { getArguments } = require('./custom-utils');

// given aa.ts
// outputs aa.ts.html
function getCoverageFileName(input) {
  return `${input}.html`;
}

async function init() {
  const ideaPath = getArguments();
  const filePath = removeIdeaLineNumberFromPath(ideaPath);
  const fileName = getFileNameFromPath(filePath);
  const fileNameWithoutSpec = removeSpecFromFile(fileName);
  const coverageFileName = getCoverageFileName(fileNameWithoutSpec);
 
  console.log(coverageFileName)
}

init();