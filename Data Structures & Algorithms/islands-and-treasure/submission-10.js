class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const queue = [];
        const visited = new Set();

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 0) {
                    visited.add(`${i}${j}`);
                    queue.push([i, j]);
                }
            }
        }


        function addCell(x, y) {
            if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] === -1 || visited.has(`${x}${y}`)) {
                return;   
            }
            visited.add(`${x}${y}`);
            queue.push([x, y]);
        }

        let distance = 0;
        while (queue.length > 0) {
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const [x, y] = queue.shift();
                grid[x][y] = distance;

                addCell(x - 1, y);
                addCell(x + 1, y);
                addCell(x, y - 1);
                addCell(x, y + 1);
            }

            distance++;
        }
    }
}
