const { readFile } = require('fs');
const { getArguments } = require('./custom-utils');

const PATH_TO_ANGULAR_JSON = 'C:/Projects/clp/angular.json';

async function init() {
  const userInput = getArguments();
  const filePath = getFilePathFromUserInput(userInput);
  readFile(PATH_TO_ANGULAR_JSON, 'utf8', (err, data) => {
    const json = JSON.parse(data);
    const projectsAndRoots = getProjectsAndRootsFromAngularJson(json);
    const projectToRunTest = getProjectToRunTest(projectsAndRoots, filePath);
    process.stdout.write(`${projectToRunTest} --test-file ${filePath}`);
  });
}

function getFilePathFromUserInput(input) {
  const regex = new RegExp(/:.*/);
  return input.replace(regex, '');
}

function getProjectToRunTest(projectsAndRoots, filePath) {
  return projectsAndRoots.find(([project, root]) => {
    return filePath.startsWith(`${root}/`)
  })[0]
}

function getProjectsAndRootsFromAngularJson(angularJson) {
  return Object.keys(angularJson.projects).map((projectName) => [
    projectName,
    angularJson.projects[projectName].root
  ]);
}

init();
