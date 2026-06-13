class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity = 10) {
        if (capacity <= 0) {
            throw Error("Invalid capacity: must be greater than 0");
        }

        this.capacity = capacity;
        this.array = new Array(capacity);
        this.length = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.length === this.capacity) {
            this.resize();
        }

        this.array[this.length] = n;
        this.length++;
        console.log(this.array);
    }

    /**
     * @returns {number}
     */
    popback() {
        this.length--;
        console.log(this.array[this.length], this.length)
        return this.array[this.length];
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity * 2;

        const newArray = new Array(this.capacity);

        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.array[i];
        }
        
        this.array = newArray;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
