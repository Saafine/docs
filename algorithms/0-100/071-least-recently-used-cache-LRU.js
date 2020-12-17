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
            [3, [1, 1], [2, 2], [3, 3], [4, 4], [4], [3], [2], [1], [5, 5], [1], [2], [3], [4], [5]]
        ],
        output: [4, 3, 2, -1, -1, 2, 3, -1, 5]
    },
    {
        args: [
            ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'],
            [2, [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]],
        output: [1, -1, -1, 3, 4]
                // 1,2,-1,-1,4
    }
];
``
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.map = {};
        this.head = null;
        this.tail = null;
    }

    put(key, value) {
        if (this.keyExists(key)) {
            this.joinNeighbours(key);
        } else if (this.size === this.capacity) {
            const head = this.head;
            this.head = head.next;
            delete this.map[head.key];
        } else {
            this.size++;
        }

        this.map[key] = {
            key,
            value,
            next: null,
            previous: this.tail || null
        };

        if (!this.head) this.head = this.map[key];
        if (this.tail) this.tail.next = this.map[key];
        this.tail = this.map[key];
    }

    get(key) {
        const obj = this.map[key];
        if (!obj) return -1;
        if (this.keyExists(key)) this.put(obj.key, obj.value);
        return obj.value;
    }

    keyExists(key) {
        return typeof this.map[key] !== 'undefined';
    }

    joinNeighbours(key) {
        const obj = this.map[key];
        const nextNode = obj.next;
        const previousNode = obj.previous;

        if (previousNode) previousNode.next = nextNode || null;
        if (nextNode) nextNode.previous = previousNode || null;

        if (this.map[key] === this.tail) this.tail = previousNode;
        if (this.map[key] === this.head) this.head = this.head.next;
        delete this.map[key];
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

trySolution(solution, testData, 1);

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
