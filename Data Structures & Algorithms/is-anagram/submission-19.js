class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let charsS = {};
        let charsT = {};
        for (let i = 0; i < s.length; i++) {
            charsS[s[i]] = (charsS[s[i]] ?? 0) + 1
            charsT[t[i]] = (charsT[t[i]] ?? 0) + 1
        }

        for (const key in charsS) {
            if (charsS[key] !== charsT[key]) {
                return false;
            }
        }

        return true;
    }
}
