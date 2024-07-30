// Return kth to last
// Implement an algorithm to find the kth to last element of a singly linked list

import { Node } from './node';
import { Maybe } from './types/types';

export function getKthToLast(head: Node<any>, k: number): Maybe<Node<any>> {
  const size = getLinkedListSize(head);
  const searchIndex = size - k - 1;
  if (searchIndex > size - 1 && searchIndex < 0) return null;

  let index = 0;
  let node: Maybe<Node<any>> = head;
  while (node) {
    if (index === searchIndex) return node;
    index++;
    node = node.next;
  }

  return null;
}

export function getKthToLast2(head: Node<any>, k: number): Maybe<Node<any>> {
  let p1: Maybe<Node<any>> = head;
  let p2: Maybe<Node<any>> = head;

  // move p1 k steps ahead
  for (let i = 0; i < k + 1; i++) {
      if (p1 === null) return null;
      p1 = p1?.next;
  }

  // move them at the same pace. When p1 hits the end, p2 will be at the right element
  while (p1 !== null) {
    p1 = p1?.next;
    p2 = p2?.next
  }

  return p2;
}

export function getLinkedListSize(head: Node<any>): number {
  let size = 0;

  let node: Maybe<Node<any>> = head;
  while (node) {
    size++;
    node = node.next;
  }

  return size;
}
