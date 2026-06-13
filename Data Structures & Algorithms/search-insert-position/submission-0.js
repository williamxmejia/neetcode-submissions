class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let m = Math.floor((r + l) / 2);
            const cur = nums[m];

            if (cur === target) {
                return m;
            } else if (cur > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return l;
    }
}
