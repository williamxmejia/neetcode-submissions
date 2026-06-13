class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const queue = [];

        // Multi-source BFS: start from all 0s
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 0) {
                    queue.push([i, j]);
                }
            }
        }

        function addCell(x, y, dist) {
            if (x < 0 || x >= rows || y < 0 || y >= cols) return;
            if (grid[x][y] !== 2147483647) return;   // Not an empty room
            
            // Mark as visited when pushing
            grid[x][y] = dist + 1;
            queue.push([x, y]);
        }

        while (queue.length > 0) {
            const [x, y] = queue.shift();
            const dist = grid[x][y];

            addCell(x - 1, y, dist);
            addCell(x + 1, y, dist);
            addCell(x, y - 1, dist);
            addCell(x, y + 1, dist);
        }
    }
}
