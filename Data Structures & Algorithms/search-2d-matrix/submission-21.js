class Solution {
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        // Binary-search the correct row
        let top = 0;
        let bottom = ROWS - 1;
        while (top <= bottom) {
            const mid = Math.floor((top + bottom) / 2);
            const lastValue = matrix[mid][COLS - 1];

            if (lastValue < target) {
                top = mid + 1;
            } else {
                bottom = mid - 1;
            }
        }

        // If top moved past last row, target cannot exist
        if (top === ROWS) return false;

        // Search within the identified row
        const row = top;
        let left = 0;
        let right = COLS - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const value = matrix[row][mid];

            if (value === target) return true;
            if (value < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}
