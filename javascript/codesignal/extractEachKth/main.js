// This function takes an input array and an integer k as arguments. The function filters the input array, returning all elements whose index + 1 is not divisible by k. For example, if the input array is [1, 2, 3, 4, 5] and k is 3, the function will return [1, 2, 4, 5] because indexes 0 + 1 (1) and 2 + 1 (3) are divisible by 3.
// Essa função recebe um array de entrada e um inteiro k como argumentos. A função filtra o array de entrada, retornando todos os elementos cujo índice + 1 não é divisível por k. Por exemplo, se o array de entrada for [1, 2, 3, 4, 5] e k for 3, a função retornará [1, 2, 4, 5] pois os índices 0 + 1 (1) e 2 + 1 (3) são divisíveis por 3.

function solution(inputArray, k) {
    return inputArray.filter((element, index) => {
        return (index + 1) % k !== 0;
    });
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let k = 3;
    assert.deepEqual(solution(inputArray, k), [1, 2, 4, 5, 7, 8, 10]);
    console.log('Test 1: ', solution(inputArray, k));

    inputArray = [1, 1, 1, 1, 1];
    k = 1;
    assert.deepEqual(solution(inputArray, k), []);
    console.log('Test 2: ', solution(inputArray, k));

    inputArray = [1, 2, 1, 2, 1, 2, 1, 2];
    k = 2;
    assert.deepEqual(solution(inputArray, k), [1, 1, 1, 1]);
    console.log('Test 3: ', solution(inputArray, k));

    inputArray = [1, 2, 1, 2, 1, 2, 1, 2];
    k = 10;
    assert.deepEqual(solution(inputArray, k), [1, 2, 1, 2, 1, 2, 1, 2]);
    console.log('Test 4: ', solution(inputArray, k));

    inputArray = [2, 4, 6, 8, 10];
    k = 2;
    assert.deepEqual(solution(inputArray, k), [2, 6, 10]);
    console.log('Test 5: ', solution(inputArray, k));
}

testSolution();
