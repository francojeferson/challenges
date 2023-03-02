// This code is a function that takes in a matrix (an array of arrays) as an argument. It iterates through the matrix, and if it finds a 0 in the current row, it sets the value in the same column of the next row to 0. It then adds up all of the values in the matrix and returns the sum.

function solution(matrix) {
    let s = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0 && i + 1 < matrix.length) {
                matrix[i + 1][j] = 0;
            }
            s += matrix[i][j];
        }
    }
    return s;
}

const assert = require('assert');
function testSolution() {
    let matrix = [
        [0, 1, 1, 2],
        [0, 5, 0, 0],
        [2, 0, 3, 3]];
    assert.deepStrictEqual(solution(matrix), 9);
    console.log('Test 1: ', solution(matrix));

    matrix = [
        [1, 1, 1, 0],
        [0, 5, 0, 1],
        [2, 1, 3, 10]];
    assert.deepStrictEqual(solution(matrix), 9);
    console.log('Test 2: ', solution(matrix));

    matrix = [
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3]];
    assert.deepStrictEqual(solution(matrix), 18);
    console.log('Test 3: ', solution(matrix));

    matrix = [[0]];
    assert.deepStrictEqual(solution(matrix), 0);
    console.log('Test 4: ', solution(matrix));

    matrix = [
        [1, 0, 3],
        [0, 2, 1],
        [1, 2, 0]];
    assert.deepStrictEqual(solution(matrix), 5);
    console.log('Test 5: ', solution(matrix));

    matrix = [
        [1],
        [5],
        [0],
        [2]];
    assert.deepStrictEqual(solution(matrix), 6);
    console.log('Test 6: ', solution(matrix));

    matrix = [[1, 2, 3, 4, 5]];
    assert.deepStrictEqual(solution(matrix), 15);
    console.log('Test 7: ', solution(matrix));

    matrix = [
        [2],
        [5],
        [10]];
    assert.deepStrictEqual(solution(matrix), 17);
    console.log('Test 8: ', solution(matrix));

    matrix = [
        [4, 0, 1],
        [10, 7, 0],
        [0, 0, 0],
        [9, 1, 2]];
    assert.deepStrictEqual(solution(matrix), 15);
    console.log('Test 9: ', solution(matrix));

    matrix = [[1]];
    assert.deepStrictEqual(solution(matrix), 1);
    console.log('Test 10: ', solution(matrix));
}

testSolution();
