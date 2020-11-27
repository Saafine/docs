const meta = {
  link: 'https://leetcode.com/problems/linked-list-cycle/',
  name: 'Linked List Cycle',
  tags: []
};

const testData = [
  {
    args: [[[3,2,0,-4], 1]],
    output: true
  }
];

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function solution(head) {
  const map = new Map();
  let tempHead = head;
  while (tempHead) {
    if (map.has(tempHead)) return true;
    map.set(tempHead);
    tempHead = tempHead.next;
  }
  return false;
}
