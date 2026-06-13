class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const exists = new Set(nums);
        let res = 0;
        for (let num of nums) {
            if (exists.has(num - 1)) {
                continue;
            }

            let length = 1;
            while (exists.has(num + length)) {
                length++;
            }
            res = Math.max(res, length);
        }
        return res;
    }
}
