const { getCurrentBranch } = require('./git-utils');
const { executionPromise } = require('./custom-utils');

async function init() {
  const branch = await getCurrentBranch();
  const type = getType(branch);
  const task = getTask(branch);
  const description = getDescription(branch);
  const commitMessage = `${task}: ${description} (${type})`
  await executionPromise(`git commit -am "${commitMessage}"`);
}

function getDescription(branch) {
  return /-\d*-(.+)/.exec(branch)[1].replace(/-/gi, ' ');
}

function getTask(branch) {
  return /\/(.+?-\d+)/.exec(branch)[1]
}

function getType(branch) {
  if (/feature\//.test(branch)) return 'feature';
  if (/hotfix\//.test(branch)) return 'hotfix';
  if (/bugfix\//.test(branch)) return 'bugfix';
  if (/chore\//.test(branch)) return 'chore'
  throw Error(`Branch type not supported!`)
}

init();
