class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        let res = 0;

        function visitIsland(i, j) {
            if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === "0") {
                return;
            }
            
            grid[i][j] = "0";

            visitIsland(i + 1, j);
            visitIsland(i - 1, j);
            visitIsland(i, j + 1);
            visitIsland(i, j - 1);
            
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === "1") {
                    res++;
                    visitIsland(i, j);
                }
            }
        }

        return res;
    }
}
