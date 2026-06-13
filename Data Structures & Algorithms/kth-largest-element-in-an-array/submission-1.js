class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        nums.sort((a, b) => Number(a) - Number(b));
        console.log(nums);
        return nums[nums.length - k];
    }
}
