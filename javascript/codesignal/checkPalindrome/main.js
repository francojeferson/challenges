// This function checks if a string is a palindrome. First, it removes all special characters from the string using a regular expression. Then it converts the string to lowercase. Then it compares each character in the string with the opposite character at the other end of the string. If all characters are equal, the function returns "true", otherwise it returns "false".
// Essa função verifica se uma string é um palíndromo. Primeiro, ela remove todos os caracteres especiais da string usando uma expressão regular. Em seguida, ela converte a string para letras minúsculas. Depois, ela compara cada caractere da string com o caractere oposto na outra extremidade da string. Se todos os caracteres forem iguais, a função retornará "true", caso contrário, retornará "false".

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

// Test 1: true Test 2: false Test 3: true Test 4: false Test 5: true Test 6: true Test 7: false Test 8: false Test 9: true Test 10: true What happened at execution was that the code was compiled and executed successfully. The tests were performed and the results were printed to the console.
// Test 1: true Test 2: false Test 3: true Test 4: false Test 5: true Test 6: true Test 7: false Test 8: false Test 9: true Test 10: true O que aconteceu na execução foi que o código foi compilado e executado com sucesso. Os testes foram realizados e os resultados foram impressos no console.

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
