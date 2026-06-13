class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({ length : 9 }, () => new Set());
        let columns = Array.from({ length : 9 }, () => new Set());
        let squares = Array.from({ length : 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const value = board[r][c];
                if (value === '.') {
                    continue;
                }

                if (rows[r].has(value)) {
                    return false;
                }
                if (columns[c].has(value)) {
                    return false;
                }
                const squaresIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if (squares[squaresIndex].has(value)) {
                    return false;
                }

                rows[r].add(value);
                columns[c].add(value);
                squares[squaresIndex].add(value);
            }

        }

        return true;
    }
}
