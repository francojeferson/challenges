// This function calculates the largest difference between the elements of an array. It uses a variable called maxDiff to store the largest deviation between the elements. It then uses a loop to loop through all the elements of the array and check the absolute difference between the current element and the next element. The variable maxDiff is updated with the maximum value of the difference. Finally, the function returns maxDiff which contains the largest difference found.
// Essa função calcula a maior diferença entre os elementos de um array. Ela usa uma variável chamada maxDiff para armazenar o maior desvio entre os elementos. Em seguida, usa um loop para percorrer todos os elementos do array e verificar a diferença absoluta entre o elemento atual e o próximo elemento. A variável maxDiff é atualizada com o valor máximo da diferença. Por último, a função retorna maxDiff que contém a maior diferença encontrada.

function solution(inputArray) {
    let maxDiff = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        maxDiff = Math.max(maxDiff, Math.abs(inputArray[i] - inputArray[i + 1]));
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
