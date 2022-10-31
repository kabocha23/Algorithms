
// create a new ListNode for the merged list
// initialize a pointer to the new list
// iterate through both lists, comparing values
// if list1's val is less than list2's, set list3 pointer's next to list1
// and move list1 to list1.next
// if list2's val is smaller, do it for list2
// increment list3's pointer to next node
// finally check if list1 or list2 still have nodes, indicating uneven lists
// have list3 pointer point to the remaing nodes 

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
};

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    let list3: ListNode = new ListNode();
    let current = list3;
    
    while(list1 && list2) {
        if(list1.val < list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    current.next = list1 || list2
     return list3.next;
};