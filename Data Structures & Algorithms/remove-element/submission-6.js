class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;
        for (const num of nums) {
            if (num === val) {
                continue;
            }
            nums[k] = num;
            k++;
        }
        return k;
    }
}
