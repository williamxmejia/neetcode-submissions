class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let res = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] !== 1) {
                    continue;
                }

                const top = grid[i - 1]?.[j] !== 1;
                const left = grid[i]?.[j - 1] !== 1;
                const bottom = grid[i + 1]?.[j] !== 1;
                const right = grid[i]?.[j + 1] !== 1;

                res += top + left + bottom + right;
            }
        }

        return res;
    }
}
