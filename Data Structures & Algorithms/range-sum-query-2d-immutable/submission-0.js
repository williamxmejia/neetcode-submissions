class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const rows = matrix.length;
        const columns = matrix[0].length; 

        const sumMatrix = Array.from({ length: rows + 1 }, () => Array(columns + 1).fill(0))
        for (let i = 0; i < rows; i++) {
            let sum = 0;
            for (let j = 0; j < columns; j++) {
                sum += matrix[i][j];
                const above = sumMatrix[i][j + 1];
                sumMatrix[i + 1][j + 1] = sum + sumMatrix[i][j + 1];
            }
        }
        this.sumMatrix = sumMatrix;
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const bottomRight = this.sumMatrix[row2 + 1][col2 + 1];
        const above = this.sumMatrix[row1][col2 + 1];
        const left = this.sumMatrix[row2 + 1][col1];
        const topLeft = this.sumMatrix[row1][col1];
        return bottomRight - above - left + topLeft;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
