class Stack {
    constructor() {
        this.stack = [];
    }

    add(data) {
        this.stack.push();
    }

    remove() {
        if(this.stack.isEmpty()) {
            return null;
        }
        return this.stack.pop();
    }

    peek() {
        if(this.stack.isEmpty()) {
            return null;
        }
        return this.stack[this.stack.length-1];
    }

    isEmpty() {
        this.stack.length == 0;
    }
}