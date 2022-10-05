// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// create two pointers, one pointer will signal the end of the list, 
// and the other pointer will be the nth from the first pointer (node to remove)
// set the first pointer to next until it has a distance of n from the second pointer
// move all pointers forwards until the first pointer reaches the end
// the second pointer will be at the nth from the last position, so it will be removed

const removeNthFromEnd = (head, n) => {
    let end = head
    let nth = head;
    let num = n;
    
    while(num > 0) {
        end = end.next;
        num--;
        console.log(end, num)
    }
    
    let prev = null;
    while(end !== null) {
        end = end.next;
        prev = nth;
        nth = nth.next;
    }
    if(prev == null) return head.next;
    prev.next = nth.next;
    nth.next = null;
    return head;  
};