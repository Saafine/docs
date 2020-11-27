const meta = {
    link: 'https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3290/',
    name: 'Middle of the Linked List',
    description: `
    Given a non-empty, singly linked list with head node head, return a middle node of linked list.
    If there are two middle nodes, return the second middle node.
    `,
    tags: []
};

const testData = [
    {
        args: [[1, 2, 3, 4, 5]],
        output: 3
    }
];

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function getLinkedListLength(head) {
    if (head.next === null) return 0;
    return 1 + getLinkedListLength(head.next);
}

function findLinkedListedNodeByIndex(head, mid, index = 0) {
    if (index === mid) return head;
    return findLinkedListedNodeByIndex(head.next, mid, index + 1);
}

function middleNode(head) {
    const mid = Math.ceil(getLinkedListLength(head) / 2);
    return findLinkedListedNodeByIndex(head, mid);
}

trySolution(middleNode, testData);

// Other solution:
// var middleNode = function(head) {
//     slow = fast = head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow;
// };

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
