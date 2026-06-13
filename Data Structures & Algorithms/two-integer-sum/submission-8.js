class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numAndIndex = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const diff = target - num;

            if (diff in numAndIndex) {
                return [numAndIndex[diff], i];
            } else {
                numAndIndex[num] = i;
            }
        }
    }
}
