const meta = {
    link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
    name: '19. Remove Nth Node From End of List\n',
    tags: ['linked list']
};

// TODO [P. Labus] test this
const testData = [
    {
        args: [
            '1->2->3->4->5',
            2
        ],
        output: '1->2->3->5'
    }
];

/**
 * Definition for singly-linked list. */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createList(def: string) {
    const nodes = [];
    def.split('->').forEach((value) => {
        nodes.push(new ListNode(Number(value)));
    });
    nodes.forEach((node, i) => {
        if (i === nodes.length - 1) return;
        node.next = nodes[i + 1];
    });
    return nodes;
}

function removeNthFromEnd(head, n) {
    const linkedListCount = getListLength(head);
    return removeNodeFromList(head, linkedListCount - n);
}

function getListLength(head, size = 1) {
    if (head.next) return getListLength(head.next, size + 1);
    return size;
}

function removeNodeFromList(head, removeIndex, index = 0, body = head) {
    if (index !== removeIndex - 1) return removeNodeFromList(head, removeIndex, ++index, body.next);
    body.next = body.next.next;
    return head;
}


function solution(listDef: string, removeIndex: number) {
    const linkedList = createList(listDef);
    return removeNthFromEnd(linkedList[0], removeIndex);
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
