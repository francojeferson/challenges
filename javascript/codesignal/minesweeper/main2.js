const directions = [
    [1, -1], [1, 0], [1, 1],
    [0, -1], [0, 1],
    [-1, -1], [-1, 0], [-1, 1]
];

solution = matrix => matrix.map((row, y) => row.map((col, x) => directions.reduce((count, i) => count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]]), 0)));

module.exports = solution;
