// This function takes an array of numbers as argument and returns the number closest to the average of the values in the array. First, a start result (result) and a min variable are set to store the minimum value. The for loop (i) loops through the array a, while the for loop (j) sums the absolute values of the difference between each element of the array and the current element of loop i. If the sum is less than min, then min is replaced by the new sum value and the result is updated to the current element of loop i. When all loops are completed, the function returns result as the answer.
// Esta função recebe um array de números como argumento e devolve o número mais próximo da média dos valores presentes no array. Primeiro, é definido um resultado inicial (result) e uma variável min para armazenar o valor mínimo. O loop for (i) percorre o array a, enquanto o loop for (j) soma os valores absolutos da diferença entre cada elemento do array e o elemento atual do loop i. Se a soma for menor que min, então min é substituído pelo novo valor da soma e o resultado é atualizado para o elemento atual do loop i. Quando todos os loops são concluídos, a função retorna result como resposta.

function solution(a) {
    let result = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < a.length; i++) {
        let sum = 0;
        for (let j = 0; j < a.length; j++) {
            sum += Math.abs(a[j] - a[i]);
        }
        if (sum < min) {
            min = sum;
            result = a[i];
        }
    }
    return result;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let a = [2, 4, 7];
    assert.deepEqual(solution(a), 4);
    console.log('Test 1: ', solution(a));

    a = [2, 3];
    assert.deepEqual(solution(a), 2);
    console.log('Test 2: ', solution(a));

    a = [1, 1, 3, 4];
    assert.deepEqual(solution(a), 1);
    console.log('Test 3: ', solution(a));

    a = [23];
    assert.deepEqual(solution(a), 23);
    console.log('Test 4: ', solution(a));

    a = [-10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    assert.deepEqual(solution(a), 15);
    console.log('Test 5: ', solution(a));

    a = [-4, -1];
    assert.deepEqual(solution(a), -4);
    console.log('Test 6: ', solution(a));

    a = [0, 7, 9];
    assert.deepEqual(solution(a), 7);
    console.log('Test 7: ', solution(a));

    a = [-1000000, -10000, -10000, -1000, -100, -1, 0, 1, 10, 100, 1000, 10000, 100000, 1000000];
    assert.deepEqual(solution(a), 0);
    console.log('Test 8: ', solution(a));

    a = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150];
    assert.deepEqual(solution(a), 65);
    console.log('Test 9: ', solution(a));

    a = [-10, 100, 200, 300, 400, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500];
    assert.deepEqual(solution(a), 500);
    console.log('Test 10: ', solution(a));
}

testSolution();
