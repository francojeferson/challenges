// This function compares an input string with the same string reversed. The function iterates over the input string, starting from the last character and adding each character to the variable reversedInputString. When the iteration is finished, reversedInputString contains the inverted string. The function then compares the input string with the reversed string and returns true if they are the same or false if they are different.
// Esta função compara uma string de entrada com a mesma string invertida. A função itera sobre a string de entrada, começando do último caractere e adicionando cada caractere à variável reversedInputString. Quando a iteração é concluída, reversedInputString contém a string invertida. A função, então, compara a string de entrada com a string invertida e retorna true se forem iguais ou false se forem diferentes.

function solution(inputString) {
    let reversedInputString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedInputString += inputString[i];
    }

    return inputString === reversedInputString;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputString = "aabaa";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 1: ', solution(inputString));

    inputString = "abac";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 2: ', solution(inputString));

    inputString = "a";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 3: ', solution(inputString));

    inputString = "az";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 4: ', solution(inputString));

    inputString = "abacaba";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 5: ', solution(inputString));

    inputString = "z";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 6: ', solution(inputString));

    inputString = "aaabaaaa";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 7: ', solution(inputString));

    inputString = "zzzazzazz";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 8: ', solution(inputString));

    inputString = "hlbeeykoqqqqokyeeblh";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 9: ', solution(inputString));

    inputString = "hlbeeykoqqqokyeeblh";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 10: ', solution(inputString));
}

testSolution();
