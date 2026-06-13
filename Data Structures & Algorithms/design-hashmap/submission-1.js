class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class MyHashMap {
    constructor() {
        this.map = Array.from({ length: 10000 }, x => new Node(null, null));
    }

    hash(key) {
        return key % this.map.length;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const hash = this.hash(key);
        let cur = this.map[hash];
        while (cur.next) {
            if (cur.next.key === key) {
                break;
            }
            cur = cur.next;
        }
        cur.next = new Node(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const hash = this.hash(key);
        let cur = this.map[hash];
        while (cur.next) {
            if (cur.next.key === key) {
                return cur.next.value;
            }
            cur = cur.next;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const hash = this.hash(key);
        let cur = this.map[hash];
        while (cur.next) {
            if (cur.next.key === key) {
                cur.next = cur.next.next;
                break;
            }
            cur = cur.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
