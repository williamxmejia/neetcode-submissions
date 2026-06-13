class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        let res = 0;

        const visited = new Set();
        function dfs(i, j) {
            if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 0) {
                return 0;
            }

           if (visited.has(`${i}${j}`)) {
                return 0;
            }

            visited.add(`${i}${j}`);

            return 1 + dfs(i - 1, j) + dfs(i, j - 1) + dfs(i + 1, j) + dfs(i, j + 1);
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    res = Math.max(res, dfs(i, j));
                }
            }
        }

        return res;
    }
}
