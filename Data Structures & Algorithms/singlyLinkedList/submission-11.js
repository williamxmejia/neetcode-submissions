class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let cur = this.head;
        let i = 0;
        while (cur) {
            if (i === index) {
                return cur.value;
            }
            cur = cur.next;
            i++
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newHead = new ListNode(val);
        newHead.next = this.head;
        this.head = newHead;

        if (this.tail === null) {
            this.tail = this.head;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newTail = new ListNode(val);
        if (this.tail) {
            this.tail.next = newTail;
            this.tail = this.tail.next;
        } else {
            this.head = newTail;
            this.tail = newTail;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index === 0) {
            if (this.head === null) {
                return false;
            }

            this.head = this.head.next;

            // We removed the only node, head is already null, now make tail match and set to null.
            if (!this.head) {
                this.tail = null;
            }

            return true;
        }        

        let cur = this.head;
        let i = 0;

        while (i !== index - 1 && cur) {
            cur = cur.next
            i++;
        }

        if (cur === null || cur.next === null) {
            return false;
        }

        cur.next = cur.next.next;

        if (cur.next === null) {
            this.tail = cur;
        }

        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const values = [];

        let cur = this.head;
        while (cur) {
            values.push(cur.value);
            cur = cur.next;
        }

        return values;
    }
}
