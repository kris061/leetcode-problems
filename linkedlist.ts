export class ListNode {
    val: number
    next: ListNode | null
    prev: ListNode | null

    constructor(val?: number, next?: ListNode | null, prev?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.prev = (prev === undefined ? null : prev)
    }
}

export class LinkedList {
    head: ListNode | null
    size: number = 0
    tail: ListNode | null = null
    constructor(head: ListNode | null = null) {
        this.head = (head === undefined ? null : head)
        var current = this.head
        while (current != null) {
            this.size += 1
            current = current.next
        }
    }

    public print(): void {
        let current = this.head
        while (current != null) {
            console.log(current.val);
            current = current.next
        }
    }

    public addFront(value: number): void {
        var newNode = new ListNode(value)
        newNode.next = this.head
        this.head = newNode
        this.size += 1
    }

    public getFront(): ListNode | null {
        if (this.head == null) throw new Error("Not Found.")
        return this.head
    }

    public removeFront(): void {
        var newHead = this.head.next
        this.head.next = null
        this.head = newHead
        this.size -= 1
    }

    public addBack(value: number): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size += 1
    }

    public getBack(): ListNode | null {
        return this.tail
    }

    public removeBack(): void {
        this.tail.prev.next = null
        this.size -= 1
    }

    public getAt(index: number): ListNode | null {
        var count = 0;
        let current = this.head

        if (index == this.size - 1) return this.tail

        while (current != null) {
            if (count == index) return current
            current = current.next
            count += 1
        }
        throw new Error("Non-existant or Out of Bounds")
    }

    public deleteDuplicates(): ListNode | null {
        let current = this.head
        let newNext = this.head.next

        while (current != null && newNext != null) {
            
            if (current.val == newNext.val) {
                if (newNext.val == newNext.next.val) {
                    newNext = newNext.next
                } else {
                    newNext = newNext.next
                    current.next = newNext
                }
            }
            current = current.next
            newNext = newNext.next

        }
        return this.head
    };
}

var n1 = new ListNode(1)
var n2 = new ListNode(1)
var n3 = new ListNode(2)

n1.next = n2
n2.next = n3

let list = new LinkedList(n1)