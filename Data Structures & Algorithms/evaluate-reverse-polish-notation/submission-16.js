class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operator = new Set(["+", "-", "*", "/"]);

        for (let token of tokens) {
            if (operator.has(token)) {
                const a = stack.pop();
                const b = stack.pop();
                if (token === "+") { 
                    token = a + b;
                } else if (token === "-") { 
                    token = b - a;
                } else if (token === "*") { 
                    token = a * b;
                } else if (token === "/") {
                    token = b / a;
                    if (token < 0) {
                        token = Math.ceil(token);
                    } else {
                        token = Math.floor(token);
                    }
                }
            }

            stack.push(Number(token));
            console.log(stack);

        }

        return stack[0];
    }
}
