class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const chars = {}

        let res = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            chars[s[r]] = (chars[s[r]] ?? 0) + 1;

            while ((r - l + 1) - Math.max(...Object.values(chars)) > k) {
                chars[s[l]]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }
        
        return res;
    }
}
