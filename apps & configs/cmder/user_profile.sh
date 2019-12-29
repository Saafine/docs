# use this file to run your own startup commands for msys2 bash'

# To add a new vendor to the path, do something like:
# export PATH=${CMDER_ROOT}/vendor/whatever:${PATH}

# Uncomment this to have the ssh agent load with the first bash terminal
# . "${CMDER_ROOT}/vendor/lib/start-ssh-agent.sh"



alias cd-dev='cd "C:/Projects"'
alias cd-main='cd "C:\Projects\clp"'
alias nt='npm run test'
alias ns='npm start'
alias go='git checkout'
alias gs='git status'
alias gc='git commit -am'
alias ga='git add .'
alias push='git push'
alias pushOrigin='node "C:/Projects/docs/scripts/push-origin.js"'
alias pull='git pull'
alias pulldev='git pull origin dev'
alias removeUntracked='git clean -df'
alias removeUnstaged='git checkout -- .'
alias helpme='cat "C:\Users\plabus\Desktop\Root Folder\cmder\config\user_aliases.sh"'
alias open-aliases='notepad "C:\Users\plabus\Desktop\Root Folder\cmder\config\user_aliases.sh"'
alias renameCurrentBranch='git branch -m'
alias clearIdeaGitCache='git rm --cached -r .idea'


# Bash Scripts
alias t='bash "C:/Projects/docs/scripts/testing.sh"'
alias recent-branches='bash "C:/Projects/docs/scripts/git-branches-by-commit-date.sh"'

# Run Commands
cd-main
# t2