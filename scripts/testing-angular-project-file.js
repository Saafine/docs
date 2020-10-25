const { readFile } = require('fs');
const { getArguments } = require('./custom-utils');
const { getSpecFromFilePath, isSpecFile } = require('./string.utils');

const PATH_TO_ANGULAR_JSON = 'C:/Projects/echo-web-clients/angular.json';

async function init() {
  const userInput = getArguments();
  const filePath = getFilePathFromUserInput(userInput);
  const filePathToSpec = isSpecFile(filePath) ? filePath : getSpecFromFilePath(filePath);

  readFile(PATH_TO_ANGULAR_JSON, 'utf8', (err, data) => {
    const json = JSON.parse(data);
    const projectsAndRoots = getProjectsAndRootsFromAngularJson(json);
    const projectToRunTest = getProjectToRunTest(projectsAndRoots, filePathToSpec);
	console.log(`${projectToRunTest} --test-file ${filePathToSpec}`)
  });
}

function getFilePathFromUserInput(input) {
  const regex = new RegExp(/:.*/);
  return input.replace(regex, '');
}

function getProjectToRunTest(projectsAndRoots, filePath) {
  if (!filePath) throw new Error(`No file path were given'}`)
  if (!projectsAndRoots) throw new Error(`No Angular projects, check angular.json path'}`)
  const project = projectsAndRoots.find(([project, root]) => {
    return filePath.startsWith(`${root}/`)
  })
  if (!project) {
	throw new Error(`No project found!`)
  }
  return project[0];
}

function getProjectsAndRootsFromAngularJson(angularJson) {
  return Object.keys(angularJson.projects).map((projectName) => [
    projectName,
    angularJson.projects[projectName].root
  ]);
}

init();
