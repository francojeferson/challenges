// This code defines a function called solution that takes in a two-dimensional array matrix as its argument. The function aims to find the number of unique 2x2 square combinations in the input matrix.
// It creates an empty Set called s that will be used to store the unique string representations of each 2x2 square.
// It then iterates through each element in the matrix array using two nested for loops starting from the first row and column, and going up until the second-last row and column index (to avoid going out of bounds).
// For each starting index, it creates a 2x2 square array by taking the value at the current index, the value to the right of the current index (i.e., index+1 in the same row), the value directly below the current index (i.e., at index+1 in the same column), and the value that is diagonally below and to the right of the current index (i.e., at index+1 in the next row and in the same column as the previous).
// It then adds the unique string representation of the 2x2 square array to the s set.
// Finally, the function returns the size of the set s, which represents the number of unique 2x2 square combinations in the input matrix.
// In summary, this function takes a 2D array as input and outputs the number of unique 2x2 square combinations in the input array.

// solution by bandorthild
function solution(matrix) {
    s = new Set();
    for (i = 0; i < matrix.length - 1; i++) {
        for (j = 0; j < matrix[i].length - 1; j++) {
            s.add([matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]].toString());
        }
    }
    return s.size;
}

const assert = require('assert');
function testSolution() {
    let matrix =
        [[1, 2, 1],
        [2, 2, 2],
        [2, 2, 2],
        [1, 2, 3],
        [2, 2, 1]];
    assert.deepStrictEqual(solution(matrix), 6);
    console.log('Test 1: ', solution(matrix));

    matrix =
        [[9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9]];
    assert.deepStrictEqual(solution(matrix), 1);
    console.log('Test 2: ', solution(matrix));

    matrix = [[3]];
    assert.deepStrictEqual(solution(matrix), 0);
    console.log('Test 3: ', solution(matrix));

    matrix = [[3, 4, 5, 6, 7, 8, 9]];
    assert.deepStrictEqual(solution(matrix), 0);
    console.log('Test 4: ', solution(matrix));

    matrix =
        [[3],
        [4],
        [5],
        [6],
        [7]];
    assert.deepStrictEqual(solution(matrix), 0);
    console.log('Test 5: ', solution(matrix));

    matrix =
        [[2, 5, 3, 4, 3, 1, 3, 2],
        [4, 5, 4, 1, 2, 4, 1, 3],
        [1, 1, 2, 1, 4, 1, 1, 5],
        [1, 3, 4, 2, 3, 4, 2, 4],
        [1, 5, 5, 2, 1, 3, 1, 1],
        [1, 2, 3, 3, 5, 1, 2, 4],
        [3, 1, 4, 4, 4, 1, 5, 5],
        [5, 1, 3, 3, 1, 5, 3, 5],
        [5, 4, 4, 3, 5, 4, 4, 4]];
    assert.deepStrictEqual(solution(matrix), 54);
    console.log('Test 6: ', solution(matrix));

    matrix = [[1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 9, 9, 9, 2, 3, 9]];
    assert.deepStrictEqual(solution(matrix), 0);
    console.log('Test 7: ', solution(matrix));
}

testSolution();
