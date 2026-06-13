class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            "]": "[",
            "}": "{",
            ")": "(",
        }

        function isOpen(char) {
            return Object.values(closeToOpen).includes(char);
        }

        const stack = [];

        for (const char of s) {
            if (isOpen(char)) {
                stack.push(char);
            } else {
                const check = stack.pop();
                if (closeToOpen[char] !== check) {
                    return false;
                }
            }   
        }

        return stack.length === 0;
    }
}
