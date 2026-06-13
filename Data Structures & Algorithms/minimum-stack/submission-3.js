class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push([val, val]);
        } else {
            const curMin = this.getMin();
            this.stack.push([val, val < curMin ? val : curMin])
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1][1];
    }
}
