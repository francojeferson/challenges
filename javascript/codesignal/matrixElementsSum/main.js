// This function receives a matrix as input parameter and returns the sum of its elements after modifying some of them. Specifically, if an element in the matrix is 0 and there is a row below it, the element in the row below is also set to 0. The function works as follows:

// Initialize a variable s to 0 to keep track of the sum of the matrix elements.
// Loop through each row of the matrix (using i) and within each row loop through each column (using j).
// If the current element (matrix[i][j]) is 0 and there is a row below it (i + 1 < matrix.length), then set the element in the row below (matrix[i + 1][j]) to 0 as well.
// Add the current element to the sum s.
// After all the elements of the matrix have been visited, return the value of s.

// This function is likely being used to solve a specific problem related to modifying a matrix in a particular way and calculating its final sum.

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
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
