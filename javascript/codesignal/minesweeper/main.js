// This function takes a matrix as input and returns a new matrix of the same size, where each element is replaced with the sum of its neighboring elements including itself in the original matrix, except when the element itself is 9.
// To achieve this, the function iterates through each row of the input matrix, then through each column of that row. For each element, if it is 0, 1, or 9, the corresponding value is set in the result matrix. Otherwise the function calculates the sum of the neighboring elements and store the sum in the corresponding element of the result matrix. The final result matrix is returned.
// Here is the pseudocode:
// function solution(matrix):
//     create empty array 'result'
//     for each row in matrix:
//         create empty array 'rowResult'
//         for each element 'cell' in row:
//             if cell == 0:
//                 set cellResult to 0
//             else if cell == 1:
//                 set cellResult to 1
//             else if cell == 9:
//                 set cellResult to 0
//             else:
//                 sum neighboring elements including itself and store it in 'cellResult'
//             add cellResult to 'rowResult'
//         add 'rowResult' to 'result'
//     return 'result'

function solution(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let rowResult = [];
        for (let j = 0; j < row.length; j++) {
            let cell = row[j];
            let cellResult = 0;
            if (cell === 0) {
                cellResult = 0;
            } else if (cell === 1) {
                cellResult = 1;
            } else if (cell === 9) {
                cellResult = 0;
            } else {
                let top = i > 0 ? matrix[i - 1][j] : 0;
                let bottom = i < matrix.length - 1 ? matrix[i + 1][j] : 0;
                let left = j > 0 ? matrix[i][j - 1] : 0;
                let right = j < row.length - 1 ? matrix[i][j + 1] : 0;
                let topLeft = i > 0 && j > 0 ? matrix[i - 1][j - 1] : 0;
                let topRight = i > 0 && j < row.length - 1 ? matrix[i - 1][j + 1] : 0;
                let bottomLeft = i < matrix.length - 1 && j > 0 ? matrix[i + 1][j - 1] : 0;
                let bottomRight = i < matrix.length - 1 && j < row.length - 1 ? matrix[i + 1][j + 1] : 0;
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
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
