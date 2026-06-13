class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k = 1;

        let prev = nums[0];
        for (let i = 1; i < nums.length; i++) {
            while (prev === nums[i]) {
                for (let j = i; j < nums.length - 1; j++) {
                    nums[j] = nums[j + 1];
                }
                nums.length--;
            }

            k++;
            prev = nums[i]
        }

        return k;
    }
}
