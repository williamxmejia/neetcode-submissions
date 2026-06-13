/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l = 1;
        let r = n;

        while (l <= r) {
            const m = Math.floor((r + l) / 2);
            const res = guess(m);

            // m is lower than target
            if (res === 1) {
                l = m + 1;
            } else if (res === 0) {
                return m;
            } else {
                r = m - 1;
            }
        }

    }
}
