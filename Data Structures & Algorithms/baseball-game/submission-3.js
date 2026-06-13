class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const scores = [];
        for (const operation of operations) {
            if (operation === "+") {
                scores.push(scores.at(-1) + scores.at(-2));
            } else if (operation === "D") { 
                scores.push(scores.at(-1) * 2);
            } else if (operation === "C") {
                scores.pop();
            } else {
                scores.push(parseInt(operation, 10));
            }
        }

        let res = 0;
        for (const score of scores) {
            res += score;
        }

        return res;
    }
}
