const { executionPromise } = require('./custom-utils');

const getBranch = 'git rev-parse --abbrev-ref HEAD';

async function getCurrentBranch() {
    return await executionPromise(getBranch);
}

module.exports = {
    getCurrentBranch
};
