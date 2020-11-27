const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3287/',
    name: 'Best Time to Buy and Sell Stock II',
    description: `
    Say you have an array for which the ith element is the price of a given stock on day i.
    Design an algorithm to find the maximum profit. You may complete as many transactions as
    you like (i.e., buy one and sell one share of the stock multiple times).
    Note: You may not engage in multiple transactions at the same time (i.e., you must
    sell the stock before you buy again).
    `,
    tags: []
};

const testData = [
    {
        args: [[7,1,5,3,6,4]],
        output: 7
    },
    {
        args: [[1,2,3,4,5]],
        output: 4
    },
    {
        args: [[7,6,4,3,1]],
        output: 0
    },
    {
        args: [[7]],
        output: 0
    },
    {
        args: [[7, 1]],
        output: 0
    },
    {
        args: [[1, 7]],
        output: 6
    },
    {
        args: [[]],
        output: 0
    }
];


function maxProfit(prices, dayIndex = 0, totalBalance = 0) {
    if (dayIndex === prices.length - 1 || prices.length === 0) return totalBalance;
    const today = prices[dayIndex];
    const tommorow = prices[dayIndex + 1];
    const shouldBuy = today < tommorow;
    const balance = shouldBuy ? totalBalance + (tommorow - today) : totalBalance;
    return maxProfit(prices, dayIndex + 1, balance)
}

trySolution(maxProfit, testData);

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
