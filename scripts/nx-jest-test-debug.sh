#!/bin/bash
node "C:\Projects\docs\scripts\testing-angular-project-file.js" $1 | xargs node --inspect-brk ./node_modules/@nrwl/cli/bin/nx test