class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let totalWeight = 0;
        for (const weight of weights) {
            totalWeight += weight;
        }

        let l = Math.max(...weights);
        let r = totalWeight;
        let res = r;

        function canShip(capacity) {
            let ships = 1;
            let currentCapacity = capacity;
            for (const weight of weights) {
                if (currentCapacity - weight < 0) {
                    ships += 1;
                    currentCapacity = capacity
                }
                currentCapacity -= weight;
            }

            return ships <= days;
        }

        while (l <= r) {
            const capacity = Math.floor((r + l) / 2);

            if (canShip(capacity)) {
                res = Math.min(res, capacity);
                r = capacity - 1;
            } else {
                l = capacity + 1;
            }
        }

        return res;
    }
}
