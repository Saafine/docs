const meta = {
  link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
  name: 'Best Time to Buy and Sell stock',
  tags: []
};

const testData = [
  {
    args: [[7, 1, 5, 3, 6, 4]],
    output: 5
  },
  {
    args: [[7, 6, 4, 3, 1]],
    output: 0
  },
  {
    args: [[2, 1, 2, 1, 0, 1, 2]],
    output: 2
  }
];

function solution(prices) {
  let profit = 0;

  let tempBuyingPrice;
  let tempProfit;
  for (let sellingPrice of prices) {
    if (typeof tempBuyingPrice === 'undefined') {
      tempBuyingPrice = sellingPrice;
      tempProfit = 0;
      continue;
    }

    tempProfit = sellingPrice - tempBuyingPrice;
    profit = tempProfit > profit ? tempProfit : profit;
    tempBuyingPrice = tempBuyingPrice < sellingPrice ? tempBuyingPrice : sellingPrice;
  }

  return profit;
}

function solution3(prices) {
  let profit = 0;

  let value;
  prices.forEach((price, index) => {
    value = Math.max(...prices.slice(index)) - price;
    profit = value > profit ? value : profit;
  });

  return profit;
}


function solution2(profits) {
  const sortedProfits = profits
    .map((value, index) => ({ index, value }))
    .sort((a, b) => a.value - b.value);

  let highestProfit = 0;
  // start from lowest profit
  for (let x = 0; x < sortedProfits.length; x++) {
    const buy = sortedProfits[x];
    // start from highest profit
    for (let y = sortedProfits.length - 1; y > x; y--) {
      const sell = sortedProfits[y];
      if (sell.index > buy.index) {
        const profit = sell.value - buy.value;
        highestProfit = profit > highestProfit ? profit : highestProfit;
        break;
      }
    }
  }

  return highestProfit;
}

trySolution(solution, testData, 2);

function trySolution(solutionFn, cases, specifyIdx) {
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
