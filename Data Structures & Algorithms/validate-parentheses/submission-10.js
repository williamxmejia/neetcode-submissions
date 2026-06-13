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
            if (Object.keys(map).includes(char)) {
                if (stack.at(-1) === map[char]) {
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
