// leetcode 876. Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// initialize two pointers, one that iterates by one, and another that iterates twice as fast
// when the fast pointer reaches the end, the slow pointer will be at the middle
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const middleNode = (head: ListNode | null): ListNode | null => {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head.next;
    
    while(fast) {
        slow = slow.next;
        fast = fast.next?.next;
    }
        
    return slow;
};