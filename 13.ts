
 class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }
    }
 

export default function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        if (!list1) return list2
        if (!list2) return list1

        const d: ListNode = new ListNode()
        let t: ListNode = d

        while (list1 && list2) {
            if (list1.val < list2.val) {
                t.next = list1
                list1 = list1.next
            } else {
                t.next = list2
                list2 = list2.next
            }
            t = t.next
        }

        t.next = list1 ?? list2
        return d.next
    };