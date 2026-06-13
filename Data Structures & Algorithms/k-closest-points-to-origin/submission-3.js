class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        function distanceToOrigin(x, y){
            return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        }

        const minHeap = new MinPriorityQueue((item) => item.distance);
        for (const [x, y] of points) {
            const distance = distanceToOrigin(x, y);
            minHeap.enqueue({distance, x, y} );
        }

        let res = [];
        for (let i = 0; i < k; i++) {
            const {distance, x, y} = minHeap.dequeue();
            res.push([x, y]);
        }

        return res;
    }
}
