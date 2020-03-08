#!/bin/bash
PATH_TO_COVERAGE_DIRECTORY="coverage"
PATH_TO_CHROME="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
node "C:\Projects\docs\scripts\coverage.js" $1 | xargs xargs find "$(cd ${PATH_TO_COVERAGE_DIRECTORY}; pwd)" -name | xargs "${PATH_TO_CHROME}"
