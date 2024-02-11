import { LinkedList, ListNode } from "./linkedlist"

function removeElements(head: ListNode | null, val: number): ListNode | null {
    var newHead = head
    if (head.val === val)
        while (newHead.val === val) newHead = newHead.next

    var current = newHead

    while (current !== null && current.next !== null) {
        while (current?.next?.val === val) current.next = current.next.next
        current = current.next
    }

    return newHead
};

var n1 = new ListNode(1)
var n2 = new ListNode(6)
var n3 = new ListNode(2)
var n4 = new ListNode(3)
var n5 = new ListNode(4)
var n6 = new ListNode(5)
var n7 = new ListNode(6)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6
n6.next = n7

var newList = new LinkedList(removeElements(n1, 6))
newList.print()