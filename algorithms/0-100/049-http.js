// !todo [lbs] DO NOT EDIT
const https = require('https');

const meta = {
  link: '',
  name: '',
  tags: []
};

const testData = [
  {
    args: [],
    output: undefined
  }
];

/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 */
async function getMovieTitles(substr) {
  const result = await _getMovieTitles(substr);
  result.forEach((x) => {
    console.log(x);
  })
}

async function _getMovieTitles(substr, page = 1, totalPages) {
  if (page > totalPages) return [];
  const data = await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${ substr }&page=${ page }`);
  const titles = getMovieTitleFromDto(data);
  return titles.concat(await _getMovieTitles(substr, ++page, data.total_pages)).sort();
}

function getMovieTitleFromDto(dto) {
  return dto.data.map((record) => record.Title);
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          resolve(json);
        } catch (error) {
          reject(error.message);
        }
      });

    }).on('error', (error) => {
      reject(error.message);
    });
  });
}


getMovieTitles('spiderman')
// trySolution(solution, testData);

function trySolution(solutionFn, cases, specifyIdx = undefined) {
  let casesLen = cases.length;
  let startIdx = specifyIdx || 0;
  if (typeof specifyIdx !== 'undefined') {
    casesLen = startIdx + 1;
  }

  for (let x = startIdx; x < casesLen; x++) {
    const args = cases[x].args;
    const expectedOutput = cases[x].output;
    const testOutput = solutionFn(...args);
    const result = testOutput === expectedOutput;
    if (!result) {
      console.error(`[${ x }] FAIL | Expected: ${ expectedOutput } | Got: ${ testOutput }`);
    } else {
      console.log(`[${ x }] Success`);
    }
  }
}
