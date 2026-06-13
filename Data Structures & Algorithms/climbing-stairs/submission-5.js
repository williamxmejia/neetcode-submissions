class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        function dfs(i) {
            if (i === n) {
                return 1;
            } else if (i > n) {
                return 0;
            }

            return dfs(i + 1) + dfs( i + 2);
        }

        return dfs(0);

        if (n === 1) {
            return 1;
        }

        if (n === 2) {
            return 2;
        }

        return this.climbStairs(n - 1) + this.climbStairs(n - 2);
    }
}
