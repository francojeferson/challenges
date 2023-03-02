// This function calculates the sum of all positive elements of a 2D array. It goes through each element of the array and checks to see if it is greater than zero. If it is, it adds the value to the variable sum. At the end, the function returns the value of the variable sum.
// Esta função calcula a soma de todos os elementos positivos de uma matriz 2D. Ela percorre cada elemento da matriz e verifica se é maior que zero. Se for, adiciona o valor à variável sum. Ao final, a função retorna o valor da variável sum.

function solution(m) {
    let sum = 0;

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            let valid = true;

            for (let k = 0; k < i; k++) {
                if (m[k][j] <= 0) {
                    valid = false;
                    break;
                }
            }

            if (valid) sum += m[i][j];
        }
    }

    return sum;
}

// unit test
// teste unitário
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
