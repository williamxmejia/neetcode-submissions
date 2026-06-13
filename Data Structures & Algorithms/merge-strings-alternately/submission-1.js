class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i = 0;
        let res = "";
        while (word1[i] && word2[i]) {
            res+= word1[i];
            res+= word2[i];
            i++
        }
            res+= word1.substring(i);
            res+= word2.substring(i);
        return res;
    }
}
