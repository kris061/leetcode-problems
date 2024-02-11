import { ListNode, LinkedList } from "./linkedlist";


function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        if (slow) {
            slow = slow.next;
        }
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }

    return false
};

var linkedlist = new LinkedList()
for (var node of [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5]) linkedlist.addBack(node)
var cycleStart = linkedlist.getBack()
var cycleConnection = linkedlist.getFront()
cycleStart.next = cycleConnection
var root = linkedlist.head

console.log(hasCycle(root))

