class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();
        for (const stone of stones) {
            maxHeap.enqueue(stone);
        }

        while (maxHeap.size() > 1) {
            let x = maxHeap.dequeue(); // By definition this is always bigger
            let y = maxHeap.dequeue();
            maxHeap.enqueue(x - y);
        }

        return maxHeap.front();
    }
}
