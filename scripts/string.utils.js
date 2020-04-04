// given aaa.ts:45
// return bbb.ts
function removeIdeaLineNumberFromPath(input) {
  const removeLineNumber = new RegExp(/:.*/);
  return input.replace(removeLineNumber, "");
}

// given aaaa/aaaa/aa.ts
// output aa.ts
function getFileNameFromPath(input) {
  const removePathRegexp = new RegExp(/^(.*)\//);
  return input.replace(removePathRegexp, "");
}

function getSpecFromFilePath(filePath) {
  return filePath.replace(/\.ts/, ".spec.ts").replace(/\.html/, ".spec.ts");
}

function removeSpecFromFile(filePath) {
  return filePath.replace(/\.spec.ts/, ".ts");
}

function isSpecFile(filePath) {
  const isSpecRegex = new RegExp(/\.spec\.ts/);
  return Boolean(filePath.match(isSpecRegex));
}


module.exports = {
  getFileNameFromPath,
  removeIdeaLineNumberFromPath,
  getSpecFromFilePath,
  removeSpecFromFile,
  isSpecFile
};