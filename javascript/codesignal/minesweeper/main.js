// This function takes an array as parameter and returns another array with the sums of the adjacent positions for each element in the original array. The function goes through the original array and checks the value of each element. If the value is 0, 1, or 9, it inserts the corresponding value into the resulting new matrix. If the value is another number, it adds up the values of adjacent elements and inserts the result into the new matrix. At the end, the function returns the new matrix.
// Esta função recebe uma matriz como parâmetro e retorna outra matriz com as somas das posições adjacentes para cada elemento na matriz original. A função percorre a matriz original e verifica o valor de cada elemento. Se o valor for 0, 1 ou 9, ele insere o valor correspondente na nova matriz resultante. Se o valor for outro número, ele soma os valores dos elementos adjacentes e insere o resultado na nova matriz. Ao final, a função retorna a nova matriz.

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

                    // If the row index is within the array boundary.
                    // Se o índice da linha estiver dentro do limite do array.
                    top = i > 0 ? matrix[i - 1][j] : 0;
                    bottom = i < matrix.length - 1 ? matrix[i + 1][j] : 0;

                    // If the column index is within the array boundary.
                    // Se o índice da coluna estiver dentro do limite do array.
                    left = j > 0 ? matrix[i][j - 1] : 0;

                    // If the column index is within the array boundary.
                    // Se o índice da coluna estiver dentro do limite do array.
                    right = j < matrix[i].length - 1 ? matrix[i][j + 1] : 0;

                    // If the row and column indices are within the bounds of the array.
                    // Se os índices da linha e da coluna estiverem dentro dos limites do array.
                    topLeft = i > 0 && j > 0 ? matrix[i - 1][j - 1] : 0;

                    // If the row and column indices are within the bounds of the array.
                    // Se os índices da linha e da coluna estiverem dentro dos limites do array.
                    topRight = i > 0 && j < matrix[i].length - 1 ? matrix[i - 1][j + 1] : 0;

                    // If the row and column indices are within the bounds of the array.
                    // Se os índices da linha e da coluna estiverem dentro dos limites do array.
                    bottomLeft = i < matrix.length - 1 && j > 0 ? matrix[i + 1][j - 1] : 0;

                    // If the row and column indices are within the bounds of the array.
                    // Se os índices da linha e da coluna estiverem dentro dos limites do array.
                    bottomRight = i < matrix.length - 1 && j < matrix[i].length - 1 ? matrix[i + 1][j + 1] : 0;

                    // Sums all elements adjacent to each analyzed element in the original array (not counting itself).
                    // Soma todos os elementos adjacentes a cada elemento analisado na matriz original (sem contar com ele mesmo).
                    cellResult = top + bottom + left + right + topLeft + topRight + bottomLeft + bottomRight;

            }

            // Inserts at the current position in the new output array the result obtained for each analyzed element in the original array.
            // Insere na posicao atual no novo vetor de saida o resultado obtido para cada elemento analisado na matriz original.
            rowResult.push(cellResult);

        }

        // Inserts the processed line into the final output vector.
        // Insere no vetor de saida final a linha processada.
        result.push(rowResult);

    }

    // Returns the new output array with the sums of the adjacent positions for each element in the original array.
    // Retorna o novo vetor de saida com as somas das posicoes adjacentes para cada elemento na matriz original.
    return result;
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
