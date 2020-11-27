const meta = {
    link: '',
    name: 'CSS specificity',
    description: ``,
    tags: []
};

const testData = [
    {
        args: ['body p', 'div'],
        output: 'body p'
    },
    {
        args: ['.class', '#id'],
        output: '#id'
    },
    {
        args: ['div.big', '.small'],
        output: 'div.big'
    },
    {
        args: ['.big', '.small'],
        output: '.small'
    },
    {
        args: ['p', '*'],
        output: 'p'
    }
];

function getSpecificity(a) {
    const specificity = {
        selector: a,
        id: 0,
        class: 0,
        tag: 0,
        breaks: 0
    };

    const getSelectorType = (char) => {
        if (char === ' ') return 'breaks';
        if (char === '#') return 'id';
        if (char === '.') return 'class';
        return 'tag';
    };

    let selectorType = null;
    for (let char of a) {
        if (selectorType === null) {
            selectorType = getSelectorType(char);
            continue;
        }

        const hasSelectorTypeChanged = [' ', '#', '.'].includes(char);
        if (hasSelectorTypeChanged) {
            specificity[selectorType]++;
            selectorType = char === ' ' ? null : getSelectorType(char);
        }
    }

    specificity[selectorType]++;

    return specificity;
}

function getHigherSpecificity(specificityA, specificityB, type) {
    if (specificityA[type] > specificityB[type]) return specificityA;
    if (specificityB[type] > specificityA[type]) return specificityB;
    return null;
}

function compare(a, b) {
    const specificityA = getSpecificity(a);
    const specificityB = getSpecificity(b);

    const moreIds = getHigherSpecificity(specificityA, specificityB, 'id');
    const moreClasses = getHigherSpecificity(specificityA, specificityB, 'class');
    const moreTags = getHigherSpecificity(specificityA, specificityB, 'tag');

    if (moreIds) return moreIds.selector;
    if (moreClasses) return moreClasses.selector;
    if (moreTags) return moreTags.selector;
    if (a === '*') return b;
    if (b === '*') return a;

    return b;
}

trySolution(compare, testData);

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
