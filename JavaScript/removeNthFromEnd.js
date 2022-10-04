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