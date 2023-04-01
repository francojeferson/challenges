// This code defines an array called "directions", where each element is a pair of the form [i, j], representing a direction of movement such that moving one space in that direction means incrementing the row index by i and the column index by j respectively.
// The array "directions" contains 8 different directions: up-left, up, up-right, left, right, down-left, down, down-right.
// The next line "solution" is a function that takes a matrix (a two-dimensional array) as an argument. The function returns a new two-dimensional array of the same shape as the input matrix.
// The new two-dimensional array contains in each element the number of neighboring elements (in the original matrix) that are 'truthy'. To achieve this, the map function cycles through each position (y, x) in the original matrix.
// The inner call to the reduce method returns the count of the non-zero values using the double-bang operator (!!). The reduce method does so by iterating through the array "directions", each time checking for the existence and truthiness of the element at the new position (y+i[0], x+i[1]) maintaining a total count of truthy values.
// Note: If no matrix element exists at the new position, it will return a falsy value (undefined), and the "!" operator will convert it to true.

// solution by koviko
const directions = [
    [1, -1], [1, 0], [1, 1],
    [0, -1], [0, 1],
    [-1, -1], [-1, 0], [-1, 1]
];

const solution = matrix => matrix.map((row, y) => row.map((col, x) => directions.reduce((count, i) => count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]]), 0)));

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
