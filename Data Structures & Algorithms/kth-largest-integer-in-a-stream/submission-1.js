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
        this.minQueue.enqueue(val);
        if (this.minQueue.size() > this.k) {
            this.minQueue.dequeue();
        }
        return this.minQueue.front();
    }
}
