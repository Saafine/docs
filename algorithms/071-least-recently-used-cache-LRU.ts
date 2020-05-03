const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3309/',
    name: 'LRU Cache',
    description: `
    Design and implement a data structure for Least Recently Used (LRU) cache.
    It should support the following operations: get and put.
    get(key) - Get the value (will always be positive) of the key if the key
    exists in the cache, otherwise return -1.
    put(key, value) - Set or insert the value if the key is not already present. 
    When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
    The cache is initialized with a positive capacity.
    Follow up:
    Could you do both operations in O(1) time complexity?`,
    tags: []
};

const testData = [
    {
        args: [
            ['LRUCache', 'put', 'put', 'put', 'put', 'get', 'get', 'get', 'get', 'put', 'get', 'get', 'get', 'get', 'get'],
            [[3], [1, 1], [2, 2], [3, 3], [4, 4], [4], [3], [2], [1], [5, 5], [1], [2], [3], [4], [5]]
        ],
        output: [4, 3, 2, -1, -1, 2, 3, -1, 5]
    }
];

class LRUCache {
    capacity;
    size = 0;

    map = {};
    head = null;
    tail = null;

    constructor(capacity) {
        this.capacity = capacity;
    }

    put(key, value) {
        const shouldUpdateExisting = typeof this.map[key] !== 'undefined';
        shouldUpdateExisting ? this.reorderAndUpdateElement(key, value) : this.addNewElement(key, value);
    }

    get(key) {
        const obj = this.map[key];
        if (!obj) return -1;
        this.reorderAndUpdateElement(key, obj.value);
        return obj.value;
    }

    reorderAndUpdateElement(key, value) {
        // 1. set key to tail
        // 2. update oldTail next to tail
        // 3. update oldKey previous to oldKeyNext
        // 4. update oldKeyNext previous to oldKey previous
        const { tail } = this;

        this.map[key].previous = this.map[key].next;
        if (this.map[key].next) this.map[key].next.previous = this.map[key].previous;

        this.tail = this.map[key] = {
            key,
            value,
            next: null,
            previous: tail.previous
        };

        tail.next = this.tail;
    }

    addNewElement(key, value) {
        const shouldFreeCache = this.size === this.capacity;
        this.addNewElementToMap(key, value);
        this.updateTail(key);
        this.updateHead();

        if (shouldFreeCache) {
        } else {
            this.size++;
        }
    }

    addNewElementToMap(key, value) {
        this.map[key] = {
            value,
            key,
            next: null,
            previous: this.tail
        };
    }

    updateTail(key) {
        if (this.tail) {
            this.tail.next = this.map[key];
        }

        this.tail = this.map[key];
    }

    updateHead() {
        if (this.size === 0) {
            this.head = this.tail;
        }
    }
}

function solution(commands, args) {
    const cache = new LRUCache(args[0]);

    const result = [];
    for (let x = 1; x < commands.length; x++) {
        const commandResult = cache[commands[x]](...args[x]);

        if (commandResult !== undefined) {
            result.push(commandResult);
        }
    }

    return result;
}

trySolution(solution, testData);

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
