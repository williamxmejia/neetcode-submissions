class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();

        let l = 0;

        let res = 0;
        for (const char of s) {
            while (set.has(char)) {
                set.delete(s[l])
                l++;
            }

            set.add(char);
            res = Math.max(res, set.size);
        }

        return res;
    }
}
