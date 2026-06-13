class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minQueue = new MinPriorityQueue();
        
        for (const num of nums) {
            this.add(num)
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.minQueue.size() < this.k) {
            this.minQueue.enqueue(val);
        } else {
            if (this.minQueue.front() < val) {
                this.minQueue.dequeue();
                this.minQueue.enqueue(val);
            }
        }

        return this.minQueue.front();
    }
}
