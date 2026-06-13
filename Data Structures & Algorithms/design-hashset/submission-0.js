class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyHashSet {
    constructor() {
        this.map = Array.from({ length: 10000}, () => new Node(0));
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const hash = key % this.map.length;
        let cur = this.map[hash];
        while (cur.next) {
            if (cur.next.value === key) {
                return;
            }
            cur = cur.next;
        }
        cur.next = new Node(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const hash = key % this.map.length;
        let cur = this.map[hash];
        while (cur.next) {
            if (cur.next.value === key) {
                cur.next = cur.next.next;
                break; // does this exit the loop immediately? is the cur = cur.next executed?
            }
            cur = cur.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const hash = key % this.map.length;
        let cur = this.map[hash];
        while (cur.next) {
            if (cur.next.value === key) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
