class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    valid(char) {
        const charCode = char.charCodeAt(0);
        const a = 'a'.charCodeAt(0);
        const z = 'z'.charCodeAt(0);
        const zero = '0'.charCodeAt(0);
        const nine = '9'.charCodeAt(0);
        return (
            ('a'.charCodeAt(0) <= charCode && charCode <= 'z'.charCodeAt(0)) ||
            ('0'.charCodeAt(0) <= charCode && charCode <= '9'.charCodeAt(0))
        );
    }

    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        s = s.toLowerCase();

        while (l < r) {
            if (!this.valid(s[l])) {
                l++;
                continue;
            }
            if (!this.valid(s[r])) {
                r--;
                continue;
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
