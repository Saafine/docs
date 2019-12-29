#!/bin/bash
node "C:\Projects\docs\scripts\testing-angular-project-file.js" $1 | xargs ng test --watch
