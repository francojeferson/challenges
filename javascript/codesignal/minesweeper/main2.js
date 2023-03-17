// This is a function that takes in a matrix, and returns a new matrix with the same dimensions as the input matrix, but with each element being the number of neighboring elements that are truthy (i.e. not 0 or false) in the input matrix.
// The function does this by first obtaining the length of the rows and columns in the input matrix. Then it uses the map function on the input matrix to create a new matrix with the same dimensions. For each element in the input matrix, the function checks all its neighbors (including diagonal neighbors) to see how many of them are truthy. This is done by using nested for loops that iterate over a 3x3 square centered on the current element (taking care not to go out of bounds of the matrix).
// Finally, the count of truthy neighboring elements is returned for each element of the input matrix, and used to populate the output matrix.

function solution(matrix) {
    const rowLength = matrix.length;
    const colLength = matrix[0].length;

    return matrix.map((row, i) =>
        row.map((col, j) => {
            let count = 0;

            for (let x = Math.max(i - 1, 0); x <= Math.min(i + 1, rowLength - 1); x++) {
                for (let y = Math.max(j - 1, 0); y <= Math.min(j + 1, colLength - 1); y++) {
                    if (x !== i || y !== j) count += matrix[x][y] ? 1 : 0;
                }
            }

            return count;
        })
    );
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
