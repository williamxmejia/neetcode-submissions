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

        const minHeap = new MinPriorityQueue();
        const pointsWithDistance = new Map();

        for (const point of points) {
            const distance = distanceToOrigin(...point);
            console.log(point, distance);
            minHeap.enqueue(distance);
            if (pointsWithDistance.has(distance)) {
                pointsWithDistance.get(distance).push(point);
            } else {
                pointsWithDistance.set(distance, [point]);
            }
        }

        console.log(minHeap.toArray());

        let res = [];
        for (let i = 0; i < k; i++) {
            const distance = minHeap.dequeue();
            res.push(pointsWithDistance.get(distance).pop());
        }

        return res;
    }
}
