class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            ')':'(',
            ']':'[',
            '}':'{'
        }
        for (const char of s) {
            if (char in map) {
                if (stack[stack.length - 1] === map[char]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
