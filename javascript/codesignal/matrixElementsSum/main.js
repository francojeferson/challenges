function solution(matrix) {
    let s = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0 && i + 1 < matrix.length) {
                matrix[i + 1][j] = 0;
            }
            s += matrix[i][j]
        }
    }
    return s
}

module.exports = solution;
