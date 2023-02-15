let dirs = [
    { r: -1, c: -1 },
    { r: -1, c: 0 },
    { r: -1, c: 1 },
    { r: 0, c: 1 },
    { r: 0, c: -1 },
    { r: 1, c: -1 },
    { r: 1, c: 0 },
    { r: 1, c: 1 }
];

function solution(matrix) {
    return matrix.map((a, r) => a.map((_, c) => dirs.reduce((p, v) => p += (matrix[r + v.r] || [])[c + v.c] | 0, 0)))
}

module.exports = solution
