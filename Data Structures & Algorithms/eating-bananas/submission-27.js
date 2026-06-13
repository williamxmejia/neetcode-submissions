class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            let m = Math.floor((r + l) / 2);

            let hoursElapsed = 0;
            for (const pile of piles) {
                hoursElapsed += Math.ceil(pile / m);

                if (hoursElapsed > h) {
                    break;
                }
            }

            // We have spare hours? We can eat slower
            if (hoursElapsed <= h) {
                res = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return res;
    }
}
