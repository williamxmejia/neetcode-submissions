class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let top = 0;
        let bottom = ROWS - 1;
        while (top <= bottom) {
            let middle = Math.floor((top + bottom) / 2);
            let lastValue = matrix[middle][COLS - 1];
            if (lastValue < target) {
                top = middle + 1;
            } else {
                bottom = middle - 1;
            }
        }

        if (top === ROWS) {
            return false;
        }

        let left = 0;
        let right = COLS - 1;
        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            let value = matrix[top][middle];

            if (value === target) {
                return true;
            } else if (value < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return false;
    }
}
