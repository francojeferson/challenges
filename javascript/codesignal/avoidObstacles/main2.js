// This function checks if an element of a given array is divisible by 2. If it is, the variable 'jump' is incremented by 1 and the iteration is restarted. When no element is divisible by 'jump', the function returns the value of 'jump'.
// Essa função verifica se um elemento de um determinado array é divisível por 2. Se for, a variável 'jump' é incrementada em 1 e a iteração é reiniciada. Quando nenhum elemento for divisível por 'jump', a função retorna o valor de 'jump'.

function solution(inputArray) {
    let jump = 2;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % jump == 0) {
            jump++;
            i = -1;
        }
    }
    return jump;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputArray = [5, 3, 6, 7, 9];
    assert.deepStrictEqual(solution(inputArray), 4);
    console.log('Test 1: ', solution(inputArray));

    inputArray = [2, 3];
    assert.deepStrictEqual(solution(inputArray), 4);
    console.log('Test 2: ', solution(inputArray));

    inputArray = [1, 4, 10, 6, 2];
    assert.deepStrictEqual(solution(inputArray), 7);
    console.log('Test 3: ', solution(inputArray));

    inputArray = [1000, 999];
    assert.deepStrictEqual(solution(inputArray), 6);
    console.log('Test 4: ', solution(inputArray));

    inputArray = [19, 32, 11, 23];
    assert.deepStrictEqual(solution(inputArray), 3);
    console.log('Test 5: ', solution(inputArray));

    inputArray = [5, 8, 9, 13, 14];
    assert.deepStrictEqual(solution(inputArray), 6);
    console.log('Test 6: ', solution(inputArray));
}

testSolution();
