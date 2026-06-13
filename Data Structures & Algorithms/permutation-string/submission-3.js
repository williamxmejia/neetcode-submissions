class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    occurances(string) {
        const occurancesArray = Array(26).fill(0);
        for (const char of string) {
            occurancesArray[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return occurancesArray;
    }

    checkInclusion(s1, s2) {
        const s1Occurances = this.occurances(s1).toString();;
        const windowSize = s1.length;

        for (let i = 0; i < s2.length - windowSize + 1; i++) {
            const substring = s2.substring(i, i+ windowSize);
            if (s1Occurances === this.occurances(substring).toString()) {
                return true;
            }
        }

        return false;
    }
}
