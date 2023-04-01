// The given code is a JavaScript function called "solution" that takes an integer "n" as input. It generates a square matrix of size 'n' and populates it with values in a spiral pattern starting from the top left corner and moving clockwise.
// Here is a step-by-step explanation of how this code works:

// First, an empty result array is initialized.
// A nested loop is used to create a 2D array of size 'n x n'. The outer loop iterates through each row of the matrix and the inner loop creates an empty array of length 'n' and pushes it as a new row to the result array.
// A count variable is set to 1 to keep track of the values being inserted into the matrix.
// Four pointers(rowStart, rowEnd, colStart, colEnd) are initialized to represent the boundaries of the current spiral.
// A while loop is used that continues until the starting row pointer(rowStart) is greater than the ending row pointer(rowEnd), and the starting column pointer(colStart) is greater than the ending column pointer(colEnd)..
// In each iteration of the while loop, a for loop runs each of the four directions (right, down, left, and up), by moving along the current boundary of the spiral.
// In the first for loop, values are inserted into the top row from left to right.
// In the second for loop, values are inserted into the last column from top to bottom.
// In the third for loop, values are inserted into the last row from right to left.
// In the fourth for loop, values are inserted into the first column (the column where we started moving) from bottom to top.
// Finally, the column and row pointers are updated to indicate that we have completed a full rotation of the current spiral. The while loop iterates again and populates the next set of values in the next inner layer of the matrix.
// Once all values are filled in the matrix, it is returned as the result.

function solution(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(new Array(n));
    }
    let count = 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;
    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            result[rowStart][i] = count;
            count++;
        }
        rowStart++;
        for (let i = rowStart; i <= rowEnd; i++) {
            result[i][colEnd] = count;
            count++;
        }
        colEnd--;
        for (let i = colEnd; i >= colStart; i--) {
            result[rowEnd][i] = count;
            count++;
        }
        rowEnd--;
        for (let i = rowEnd; i >= rowStart; i--) {
            result[i][colStart] = count;
            count++;
        }
        colStart++;
    }
    return result;
}

const assert = require('assert');
function testSolution() {
    try {
        let n = 3;
        assert.deepStrictEqual(solution(n), [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5]]);
        console.log('Test 1: ', solution(n));

        n = 5;
        assert.deepStrictEqual(solution(n), [
            [1, 2, 3, 4, 5],
            [16, 17, 18, 19, 6],
            [15, 24, 25, 20, 7],
            [14, 23, 22, 21, 8],
            [13, 12, 11, 10, 9]]);
        console.log('Test 2: ', solution(n));

        n = 6;
        assert.deepStrictEqual(solution(n), [
            [1, 2, 3, 4, 5, 6],
            [20, 21, 22, 23, 24, 7],
            [19, 32, 33, 34, 25, 8],
            [18, 31, 36, 35, 26, 9],
            [17, 30, 29, 28, 27, 10],
            [16, 15, 14, 13, 12, 11]]);
        console.log('Test 3: ', solution(n));

        n = 7;
        assert.deepStrictEqual(solution(n), [
            [1, 2, 3, 4, 5, 6, 7],
            [24, 25, 26, 27, 28, 29, 8],
            [23, 40, 41, 42, 43, 30, 9],
            [22, 39, 48, 49, 44, 31, 10],
            [21, 38, 47, 46, 45, 32, 11],
            [20, 37, 36, 35, 34, 33, 12],
            [19, 18, 17, 16, 15, 14, 13]]);
        console.log('Test 4: ', solution(n));

        n = 10;
        assert.deepStrictEqual(solution(n), [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            [36, 37, 38, 39, 40, 41, 42, 43, 44, 11],
            [35, 64, 65, 66, 67, 68, 69, 70, 45, 12],
            [34, 63, 84, 85, 86, 87, 88, 71, 46, 13],
            [33, 62, 83, 96, 97, 98, 89, 72, 47, 14],
            [32, 61, 82, 95, 100, 99, 90, 73, 48, 15],
            [31, 60, 81, 94, 93, 92, 91, 74, 49, 16],
            [30, 59, 80, 79, 78, 77, 76, 75, 50, 17],
            [29, 58, 57, 56, 55, 54, 53, 52, 51, 18],
            [28, 27, 26, 25, 24, 23, 22, 21, 20, 19]]);
        console.log('Test 5: ', solution(n));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
