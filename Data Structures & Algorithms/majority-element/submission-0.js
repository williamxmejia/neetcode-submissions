class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const n = nums.length;
        const occurance = {};
        for (const num of nums) {
            occurance[num] = (occurance[num] ?? 0) + 1;
        }

        for (const [num, occurs] of Object.entries(occurance)) {
            if (occurs > n / 2) {
                return num;
            }
        }
    }
}
