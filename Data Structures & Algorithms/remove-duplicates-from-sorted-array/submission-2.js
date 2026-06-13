class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 1;

        for (let j = 1; j < nums.length; j++) {
            if (nums[i - 1] === nums[j]) {
                continue;
            }

            nums[i] = nums[j];
            i++;
        }

        return i;
    }
}
