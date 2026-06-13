class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({ length : 9 }, () => new Set());
        let columns = Array.from({ length : 9 }, () => new Set());

        let squares = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    continue;
                }

                const value = board[r][c];
                
                if (rows[r].has(value)) {
                    return false;
                }
                if (columns[c].has(value)) {
                    return false;
                }

                const squaresKey = [Math.floor(r / 3), Math.floor(c / 3)].join("");
                if (!squares.get(squaresKey)) {
                    squares.set(squaresKey, new Set());
                }
                if (squares.get(squaresKey).has(value)) {
                    return false;
                }

                rows[r].add(board[r][c]);
                columns[c].add(board[r][c]);
                squares.get(squaresKey).add(value);
            }

        }
            console.log(squares);

        return true;
    }
}
