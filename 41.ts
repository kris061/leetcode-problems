import { ListNode, LinkedList } from "./linkedlist";

function reverseList(head: ListNode | null): ListNode | null {
    var current = head
    var values: (ListNode | null)[] = []
    while (current !== null) {
        values.push(current)
        current = current.next
    }
    var len = values.length
    values.reverse()
    
    for (var i = 0; i < len; i++) {
        if (i === len-1) values[i].next = null
        else values[i].next = values[i+1]
    }

    head = values[0]

    return head
};

var n1 = new ListNode(1)
var n2 = new ListNode(2)
var n3 = new ListNode(3)
var n4 = new ListNode(4)
var n5 = new ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

reverseList(n1); // EXPECTED: [5,4,3,2,1]
// console.log(reverseList(n1)); // EXPECTED: [5,4,3,2,1]


