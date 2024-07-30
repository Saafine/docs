import { Node } from './node';
import { Maybe } from './types/types';

// Delete Middle Node
// Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.
// Example:
// Input: the node c from the linked list a -> b -> c -> d -> e -> f
// Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f
export function deleteMiddleNode(mid: Node<any>): boolean {
  if (!mid || !mid.next) return false;
  let next: Maybe<Node<any>> = mid.next;
  mid.data = next.data;
  mid.next = next.next;
  return true;
}
