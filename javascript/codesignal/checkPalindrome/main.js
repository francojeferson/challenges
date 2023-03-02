// This function checks whether an input string is a palindrome. First, it removes all characters that are not letters or numbers from the input string and converts it to lowercase. Then it runs through the string from left half to right half and checks whether each character matches the character in the right half of the string. If all characters match, then the function returns true, indicating that the input string is a palindrome. Otherwise, it returns false.
// Essa função verifica se uma string de entrada é um palíndromo. Primeiro, ela remove todos os caracteres que não são letras ou números da string de entrada e a converte para letras minúsculas. Em seguida, ela percorre a string da metade esquerda para a direita e verifica se cada caractere corresponde ao caractere na metade direita da string. Se todos os caracteres corresponderem, então a função retornará true, indicando que a string de entrada é um palíndromo. Caso contrário, ela retornará false.

function solution(inputString) {
    const regex = /[^a-zA-Z0-9]/g;
    procString = inputString.toLowerCase().replace(regex, '');

    let integCheck = true;
    for (let i = 0; i < procString.length / 2; i++) {
        if (procString[i] !== procString[procString.length - 1 - i]) {
            integCheck = false;
            break;
        }
    }

    return integCheck;
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
