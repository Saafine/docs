import { Maybe } from './types/types';

export class Node<Data> {
    next: Maybe<Node<Data>> = null;

    constructor(public data: Data) {}

    appendToTail(data: Data) {
        const end = new Node(data);
        let n: Node<Data> = this;
        while (n.next) {
            n = n.next
        }
        n.next = end;
    }

}

export function deleteNode<Data>(head: Maybe<Node<Data>>, data: Data): Maybe<Node<Data>> {
    if (!head) return null
    let node = head;

    if (node.data === data) {
        return head.next // moved head (because 1st node was deleteD)
    }

    while (node.next) {
        if (node.next.data === data) {
            node.next = node.next.next;
            return head // head didn't change
        }
        node = node.next
    }

    return head
}
