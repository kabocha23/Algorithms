// Leetcode 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// define ListNode
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// initialize a new ListNode
// iterate through Linked List
// recursively set sol.val to equal head.val, with sol.next as sol
// building the list backwards
const reverseList = (head: ListNode | null): ListNode | null => {
    let sol: ListNode | null = null;
    while(head) {
        sol = new ListNode(head.val, sol);
        head = head.next;
    }
    return sol;
};