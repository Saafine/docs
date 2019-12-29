const { executionPromise, applyTerminalArguments } = require('./custom-utils');

const getBranches = 'git branch';
const pushBranchToOrigin = 'git push --set-upstream origin';

function extractCurrentBranch(stdout) {
  return stdout
    .split('\n')
    .find(branch => branch.startsWith('*'))
    .trim()
    .replace('*', '')
}

async function init() {
  const currentBranch = await executionPromise(getBranches).then(extractCurrentBranch).catch(console.log)
  const command = applyTerminalArguments(`${ pushBranchToOrigin } ${ currentBranch }`);
  await executionPromise(command).catch(console.log)
}

init();
