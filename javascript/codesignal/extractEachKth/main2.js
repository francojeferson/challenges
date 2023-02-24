// The optimization consists of replacing the filter using the filter() method for an ordinary for loop, because this way it is possible to reduce the time complexity of the algorithm to O(n), since it is not necessary to perform an additional operation for each element of the array.
// A otimização consiste em substituir o filtro usando o método filter() para um loop for comum, pois assim é possível reduzir a complexidade de tempo do algoritmo para O(n), já que não é necessário executar uma operação adicional para cada elemento do array.

function solution(inputArray, k) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if ((i + 1) % k !== 0) {
            result.push(inputArray[i]);
        }
    }

    return result;
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
