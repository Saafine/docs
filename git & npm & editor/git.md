# searching string in git (for example removed comment)
git log -p -S xxx

# Revert from X to Y
git revert 0766c053..HEAD
If there are merge requests in the log, you need to revert them one by:
git revert 07666c053 -m 1

# searching string in git in all branches
git grep "string/regexp" $(git rev-list --all --since=01-01-2020)

# No merge commit sync
git merge --ff-only origin/xx

# Package Vulnerability
git rev-list --all | xargs git grep "ua-parser-js@" | cut -d@ -f2 | uniq) t
