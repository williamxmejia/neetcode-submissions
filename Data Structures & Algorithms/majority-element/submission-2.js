class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let num = nums[0];

        for (const n of nums) {
            if (count === 0) {
                num = n;
            }

            if (n === num) {
                count++;
            } else {
                count--;
            }
        }

        return num;
    }
}
