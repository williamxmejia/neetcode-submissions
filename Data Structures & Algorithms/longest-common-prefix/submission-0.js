class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const firstStr = strs[0]
        let validUntil = 0;

        for (let i = 0; i < firstStr.length; i++) {
            const char = firstStr[i];

            let bad = false;
            for (let j = 1; j < strs.length; j++) {
                if (strs[j][i] === firstStr[i]) {
                    continue;
                }

                bad = true;
                break;            
            }

            if (bad) {
                break;
            } else {
                validUntil++;
            }
        }

        return firstStr.substring(0, validUntil);
    }
}
