const A = 'a'.charCodeAt(0);
const Z = 'z'.charCodeAt(0);
const ZERO = '0'.charCodeAt(0);
const NINE = '9'.charCodeAt(0);

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    valid(char) {
        const c = char.charCodeAt(0);
        return (A <= c && c <= Z) || (ZERO <= c && c <= NINE);
    }

    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        s = s.toLowerCase();

        while (l < r) {
            while (l < r && !this.valid(s[l])) {
                l++;
            }
            while (r > l && !this.valid(s[r])) {
                r--;
            }

            if (s[l] === s[r]) {
                l++;
                r--;
            } else {
                return false;
            }
        }

        return true;
    }
}
