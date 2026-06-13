class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        
        while (l <= r) {
            const m = Math.floor((r + l) / 2);
            const middle = nums[m];
            if (middle === target) {
                return m;
            } else if (middle > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return -1;
    }
}
