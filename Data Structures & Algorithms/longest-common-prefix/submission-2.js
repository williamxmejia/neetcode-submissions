class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const firstStr = strs[0]
        for (let i = 0 ; i < firstStr.length; i++) {
            for (let str of strs) {
                if (str[i] !== firstStr[i]) {
                    return firstStr.substring(0, i);
                }
            }
        }

        return firstStr;
    }
}
