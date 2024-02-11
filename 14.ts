import { ListNode } from "./linkedlist";


function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head
    let prev = head

    while (current && current.next) {
        current = current.next
        if (current?.val == prev?.val) prev.next = current.next
        else prev = current
    }
    return head
};

var n1 = new ListNode(1)
var n2 = new ListNode(1)
var n3 = new ListNode(1)

n1.next = n2
n2.next = n3
// n6.next = n7
// n7.next = n8
// n8.next = n9

console.log(deleteDuplicates(n1))