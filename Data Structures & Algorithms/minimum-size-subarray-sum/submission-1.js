class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        // let res = Number.POSITIVE_INFINITY;

        // let l = 0;
        // let r = 0;
        // let total = 0;
        // while (r < nums.length) {
        //     console.log(total);
        //     if (total >= target) {
        //         res = Math.min(res, r - l + 1);
        //         total -= nums[l];
        //         l++;
        //     } else {
        //         total += nums[r];
        //         r++;
        //     }
        // }

        // return 0;

        let l = 0;
        let total = 0;
        let result = Number.POSITIVE_INFINITY;
        
        for (let r = 0; r < nums.length; r++) {
            total += nums[r];

            while (total >= target) {
                result = Math.min(result, r - l + 1);
                total -= nums[l];
                l++;
            }
        }

        if (result === Number.POSITIVE_INFINITY) {
            return 0;
        } else {
            return result;
        }
    }
}
