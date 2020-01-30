class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        this.queue.unshift(data);
    }

    dequeue() {
        if(this.queue.isEmpty()) {
            return null;
        }
        return this.queue.pop();
    }

    isEmpty() {
        return this.queue.length == 0;
    }

    peek() {
        if(this.queue.isEmpty()) {
            return null;
        }
        this.queue[this.queue.length - 1];
    }
}

module.exports = Queue;