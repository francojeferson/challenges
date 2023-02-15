function solution(matrix) {
    return matrix.map((row, i) => row.map((col, j) => {
        return countBombs(matrix, i, j);
    }));
}

function countBombs(array, x, y) {
    let count = 0;

    for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, array.length); i++)
        for (let j = Math.max(y - 1, 0); j < Math.min(y + 2, array[i].length); j++) {
            if (i === x && j === y) continue;
            else if (array[i][j] === true)
                count++;
        }

    return count;
}

module.exports = solution;
