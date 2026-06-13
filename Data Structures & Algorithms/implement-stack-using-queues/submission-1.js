class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyStack {
    constructor() {
        this.tail = null;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const node = new Node(x);
        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.tail = node;
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.tail) {
            const value = this.tail.value;
            this.tail = this.tail.prev;
            return value;
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.tail.value;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.tail === null;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
