// This function takes an array as parameter and returns another array containing the number of live cells adjacent to each cell in the original array. Each element of the new array represents the number of live cells adjacent to the corresponding position in the original array.
// Esta função recebe uma matriz como parâmetro e retorna outra matriz contendo o número de células vivas adjacentes a cada célula da matriz original. Cada elemento da nova matriz representa o número de células vivas adjacentes à posição correspondente na matriz original.

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

// unit test
// teste unitário
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
