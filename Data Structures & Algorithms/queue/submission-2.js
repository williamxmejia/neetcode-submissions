class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class MyDeque {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const node = new Node(value);
        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const node = new Node(value);
        if (this.head) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.tail) {
            const value = this.tail.value;
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null;
            }
            return value;
        }
        return -1;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.head) {
            const value = this.head.value;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null
            } else {
                this.tail = null;
            }
            return value;
        }
        return -1;
    }
}
