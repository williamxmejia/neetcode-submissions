class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        if (k === 0) {
            return false;
        }


        for (let i = 0; i < nums.length; i++) {
            let j = Math.min(i + k, nums.length - 1);
            while (j > i) {
                if (nums[i] === nums[j]) {
                    return true;
                }
                j--;
            }
        }

        return false;
    }
}
