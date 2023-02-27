// This function takes an array as parameter (a) and returns the maximum difference between two consecutive numbers in the array. It runs through the array using a for loop. Inside the loop, the variable "diff" stores the absolute difference between the current numbers at index "i" and "i + 1". If the difference is greater than the variable maxDiff, maxDiff is updated to the value of the diff variable. At the end of the loop, maxDiff is returned as the result of the function.
// Essa função recebe um array como parâmetro (a) e retorna a diferença máxima entre dois números consecutivos no array. Ela percorre o array usando um loop for. Dentro do loop, a variável "diff" armazena a diferença absoluta entre os números atuais no índice "i" e "i + 1". Se a diferença for maior que a variável maxDiff, maxDiff é atualizado para o valor da variável diff. Ao final do loop, maxDiff é retornado como o resultado da função.

function solution(a) {
    let maxDiff = 0;
    for (let i = 0; i < a.length - 1; i++) {
        const diff = Math.abs(a[i] - a[i + 1]);
        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }

    return maxDiff;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputArray = [2, 4, 1, 0];
    assert.deepStrictEqual(solution(inputArray), 3);
    console.log('Test 1: ', solution(inputArray));

    inputArray = [1, 1, 1, 1];
    assert.deepStrictEqual(solution(inputArray), 0);
    console.log('Test 2: ', solution(inputArray));

    inputArray = [-1, 4, 10, 3, -2];
    assert.deepStrictEqual(solution(inputArray), 7);
    console.log('Test 3: ', solution(inputArray));

    inputArray = [10, 11, 13];
    assert.deepStrictEqual(solution(inputArray), 2);
    console.log('Test 4: ', solution(inputArray));

    inputArray = [-2, -2, -2, -2, -2];
    assert.deepStrictEqual(solution(inputArray), 0);
    console.log('Test 5: ', solution(inputArray));

    inputArray = [-1, 1, -3, -4];
    assert.deepStrictEqual(solution(inputArray), 4);
    console.log('Test 6: ', solution(inputArray));

    inputArray = [-14, 15, -15];
    assert.deepStrictEqual(solution(inputArray), 30);
    console.log('Test 7: ', solution(inputArray));
}

testSolution();
