class MyStack {
    stack: any[]
    constructor(stack: any[] = []) {
        this.stack = stack
    }

    push(x: number): void {
        this.stack.push(x)
    }

    pop(): number {
        return this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length-1]
    }

    empty(): boolean {
        return this.stack.length == 0
    }
}

var myStack = new MyStack();
myStack.push(1);
console.log("PUSH 1:", myStack.stack);

myStack.push(2);
console.log("PUSH 2:", myStack.stack);

myStack.top(); // return 2
console.log("TOP:", myStack.top());

console.log("POP:", myStack.pop());// return 2

myStack.empty(); // return False
console.log("EMPTY:", myStack.empty());
