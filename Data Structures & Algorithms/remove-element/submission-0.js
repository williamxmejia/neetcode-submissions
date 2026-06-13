class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            if (nums[r] === val) {
                continue;
            }

            nums[l] = nums[r];
            l++;
        }

        return l;
    }
}
