import { Node } from './node';
import { Maybe } from './types/types';

// Remove Dups
// Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed ?

export function removeDups(head: Node<number>): Node<number> {
  const values = new Set();

  let node: Maybe<Node<number>> = head;
  let previous: Node<number> = head;

  while (node) {
    const isDuplicate = values.has(node.data);
    const next: Maybe<Node<number>> = node.next;

    if (isDuplicate) {
      previous.next = next;
    } else {
      values.add(node.data);
      previous = node;
    }

    node = next;
  }

  return head;
}

// Solution to: How would you solve this problem if a temporary buffer is not allowed ?
// O(n^2)
export function removeDups2(head: Node<number>): Node<number> {
  let node: Maybe<Node<number>> = head;
  let previous: Node<number> = head;

  while (node) {
    const isDuplicate = isDuplicateNode(head, node.data);
    const next: Maybe<Node<number>> = node.next;

    if (isDuplicate) {
      previous.next = next;
    } else {
      previous = node;
    }

    node = next;
  }

  return head;
}

function isDuplicateNode(head: Node<number>, value: number): boolean {
  let count = 0;
  let node: Maybe<Node<number>> = head;

  while (node) {
    if (node.data === value) {
      count++;
      if (count > 1) return true;
    }
    node = node.next;
  }

  return false;
}
