class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // let ret = 0;
        // for (const num of nums) {
        //     if (num !== val) {
        //         ret++;
        //     }
        // }
        // return ret;
        let n = nums.length;
        for (let i = 0; i < n; i++) {
            if (nums[i] === val) {
                nums.splice(i, 1);
                i--;
                n--;
            }
        }
        return n;
    }
}
