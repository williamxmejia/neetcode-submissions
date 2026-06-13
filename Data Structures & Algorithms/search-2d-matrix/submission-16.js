class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (const row of matrix) {
            if (row.at(-1) < target) {
                continue;
            }

            for (const col of row) {
                if (col === target) {
                    return true;
                }
            }

            return false;
        }

        return false;
    }
}
