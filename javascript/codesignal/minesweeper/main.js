// The function solution takes a two-dimensional matrix, performs operations on each element of the matrix, and stores the results in a new two-dimensional matrix. The new matrix represents the sum of the cells surrounding each element of the original matrix, along with each cell's own value.
// The function takes the following steps:

// Initialize an empty array result to hold the results.
// Loop through each row of the matrix, and perform the following sub-steps for each row:
// a. Initialize an empty array rowResult to hold the results for this row.
// b. Initialize 8 variables (top, bottom, left, right, topLeft, topRight, bottomLeft, and bottomRight) to represent the values of the cells surrounding the current cell, taking care to check that the values exist before assigning them to the variable.
// c. Use a switch statement to determine the value of the current cell and assign an appropriate value to the variable cellResult.
// d. Add cellResult to rowResult.
// Add rowResult to result.
// Return result.

function solution(matrix) {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        let rowResult = [];
        let top, bottom, left, right, topLeft, topRight, bottomLeft, bottomRight;

        for (let j = 0; j < matrix[i].length; j++) {
            let cellResult;

            switch (matrix[i][j]) {
                case 0:
                    cellResult = 0;
                    break;
                case 1:
                    cellResult = 1;
                    break;
                case 9:
                    cellResult = 0;
                    break;
                default:
                    top = i > 0 ? matrix[i - 1][j] : 0;
                    bottom = i < matrix.length - 1 ? matrix[i + 1][j] : 0;
                    left = j > 0 ? matrix[i][j - 1] : 0;
                    right = j < matrix[i].length - 1 ? matrix[i][j + 1] : 0;
                    topLeft = i > 0 && j > 0 ? matrix[i - 1][j - 1] : 0;
                    topRight = i > 0 && j < matrix[i].length - 1 ? matrix[i - 1][j + 1] : 0;
                    bottomLeft = i < matrix.length - 1 && j > 0 ? matrix[i + 1][j - 1] : 0;
                    bottomRight = i < matrix.length - 1 && j < matrix[i].length - 1 ? matrix[i + 1][j + 1] : 0;
                    cellResult = top + bottom + left + right + topLeft + topRight + bottomLeft + bottomRight;
            }

            rowResult.push(cellResult);
        }

        result.push(rowResult);
    }

    return result;
}

const assert = require('assert');
function testSolution() {
    let matrix = [
        [true, false, false],
        [false, true, false],
        [false, false, false]];
    assert.deepStrictEqual(solution(matrix), [
        [1, 2, 1],
        [2, 1, 1],
        [1, 1, 1]]);
    console.log('Test 1: ', solution(matrix));

    matrix = [
        [false, false, false],
        [false, false, false]];
    assert.deepStrictEqual(solution(matrix), [
        [0, 0, 0],
        [0, 0, 0]]);
    console.log('Test 2: ', solution(matrix));

    matrix = [
        [true, false, false, true],
        [false, false, true, false],
        [true, true, false, true]];
    assert.deepStrictEqual(solution(matrix), [
        [0, 2, 2, 1],
        [3, 4, 3, 3],
        [1, 2, 3, 1]]);
    console.log('Test 3: ', solution(matrix));

    matrix = [
        [true, true, true],
        [true, true, true],
        [true, true, true]];
    assert.deepStrictEqual(solution(matrix), [
        [3, 5, 3],
        [5, 8, 5],
        [3, 5, 3]]);
    console.log('Test 4: ', solution(matrix));

    matrix = [
        [false, true, true, false],
        [true, true, false, true],
        [false, false, true, false]];
    assert.deepStrictEqual(solution(matrix), [
        [3, 3, 3, 2],
        [2, 4, 5, 2],
        [2, 3, 2, 2]]);
    console.log('Test 5: ', solution(matrix));

    matrix = [
        [true, false],
        [true, false],
        [false, true],
        [false, false],
        [false, false]];
    assert.deepStrictEqual(solution(matrix), [
        [1, 2],
        [2, 3],
        [2, 1],
        [1, 1],
        [0, 0]]);
    console.log('Test 6: ', solution(matrix));
}

testSolution();
