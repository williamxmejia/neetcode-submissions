class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let num = nums[0];

        for (const n of nums) {
            if (n === num) {
                count++;
            } else {
                if (count === 0) {
                    count = 1;
                    num = n;
                } else {
                    count--;
                }
            }
        }

        return num;
    }
}
