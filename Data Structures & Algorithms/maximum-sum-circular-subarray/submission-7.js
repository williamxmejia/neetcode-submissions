class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let gMin = nums[0]
        let gMax = nums[0];
        let cMin = 0;
        let cMax = 0;
        let total = 0;

        for (const num of nums) {
            cMax = Math.max(num, cMax + num);
            cMin = Math.min(num, cMin + num);

            gMin = Math.min(gMin, cMin);
            gMax = Math.max(gMax, cMax);

            total += num;
        }

        if (gMax < 0) {
            return gMax;
        }

        return Math.max(total - gMin, gMax);
    }
}
