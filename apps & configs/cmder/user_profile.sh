# use this file to run your own startup commands for msys2 bash'

# To add a new vendor to the path, do something like:
# export PATH=${CMDER_ROOT}/vendor/whatever:${PATH}

# Uncomment this to have the ssh agent load with the first bash terminal
# . "${CMDER_ROOT}/vendor/lib/start-ssh-agent.sh"



alias cd-p='cd "C:/Projects"'
alias cd-mono='cd "C:\Projects\echo-web-clients"'
alias cd-platform='cd "C:\Projects\eagle-management-ui"'
alias nt='npm run test'
alias ns='npm start'
alias nsp='npm run start:portal'
alias nsq='npm run start:quote'
alias nsd='npm run start:documents'
alias nsm='npm run start:meetings'
alias nsb='npm run start:bob'
alias go='git checkout'
alias gf='git branch --list $1'
alias gs='git status'
alias gc='git commit -am'
alias ga='git add .'
alias recent='git reflog | egrep -io "moving from ([^[:space:]]+)" | awk "{ print $3 }" | awk " !x[$0]++" | egrep -v "^[a-f0-9]{40}$" | head -n5'
alias push='git push'
alias pushOrigin='node "C:/Projects/docs/scripts/push-origin.js"'
alias pull='git pull'
alias pulldev='git pull origin dev'
alias removeUntracked='git clean -df'
alias removeUnstaged='git checkout -- .'
alias helpme='cat "C:\Users\pawel\Desktop\Root Folder\cmder\config\user_profile.sh"'
alias open-aliases='notepad "C:\Users\pawel\Desktop\Root Folder\cmder\config\user_profile.sh"'
alias renameCurrentBranch='git branch -m'
alias clearIdeaGitCache='git rm --cached -r .idea'
alias chrome="'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'"
alias lines="git diff --shortstat origin/dev/mvp02"
alias clearCoverage="rm -r 'C:\Projects\clp\coverage'"
alias e2e="ng e2e --watch"

# Bash Scripts
alias t='bash "C:/Projects/docs/scripts/testing.sh"'
alias td='bash "C:/Projects/docs/scripts/nx-jest-test-debug.sh"'
alias ta='npm run affected:test:dev'
alias c='bash "C:/Projects/docs/scripts/run-coverage.sh"'
alias recent='bash "C:/Projects/docs/scripts/git-recent.sh"'
alias up='node /c/Projects/docs/scripts/up-commit.js'
alias upp='up && push'

# Run Commands
cd-mono
