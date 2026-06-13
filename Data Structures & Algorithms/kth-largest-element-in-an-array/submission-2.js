class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const maxHeap = new MaxPriorityQueue();
        for (const num of nums) {
            maxHeap.enqueue(Number(num));
        }
        
        let res = 0;
        for (let i = 0; i < k; i++) {
            res = maxHeap.dequeue();
        }

        return res;
    }
}
