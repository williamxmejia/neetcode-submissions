class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const exists = new Set();
        for (const num of nums) {
            exists.add(num);
        }

        let res = 0;
        let consecutive;
        for (let num of nums) {
            consecutive = 0;
            while (exists.has(num)) {
                num++;
                consecutive++;
                res = Math.max(res, consecutive);
            }
        }

        return res;
    }
}
