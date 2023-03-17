// The code defines a function called solution that takes in a parameter matrix, which is expected to be a 2D array. The function then loops through each column of the matrix from left to right, and for each column, it sums up all the numbers in that column from top to bottom until it encounters a 0. If a 0 is encountered, it stops summing for that column and moves on to the next column. After all columns have been processed, the function returns the total sum of all the numbers that were added up.

// solution by myjinxin2015
function solution(matrix) {
    for (var r = 0, j = 0; j < matrix[0].length; j++) {
        for (var i = 0; i < matrix.length; i++) {
            if (matrix[i][j] === 0) break;
            else r += matrix[i][j];
        }
    }
    return r;
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
