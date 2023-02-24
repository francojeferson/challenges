// This function takes an input string and does a Caesar's Cipher operation, i.e. it encrypts the input string into a new string, using a 1-number offset. The code uses the offset to know the ASCII table position of the letters, so for each letter of the string it calculates the ASCII table position of the new letter +1 and converts it to the corresponding character.
// Essa função recebe uma string de entrada e faz uma operação de Cifra de César, ou seja, ela criptografa a string de entrada em uma nova string, usando um deslocamento de 1 número. O código usa o "offset" para saber a posição na tabela ASCII das letras, então para cada letra da string ele calcula a posição na tabela ASCII da nova letra +1 e converte para o caractere correspondente.

function solution(inputString) {
    let outputString = '';
    let offset = 'a'.charCodeAt();

    for (let char of inputString) {
        outputString += String.fromCharCode((char.charCodeAt() - offset + 1) % 26 + offset);
    }

    return outputString;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputString = "crazy";
    assert.deepStrictEqual(solution(inputString), "dsbaz");
    console.log('Test 1: ', solution(inputString));

    inputString = "z";
    assert.deepStrictEqual(solution(inputString), "a");
    console.log('Test 2: ', solution(inputString));

    inputString = "aaaabbbccd";
    assert.deepStrictEqual(solution(inputString), "bbbbcccdde");
    console.log('Test 3: ', solution(inputString));

    inputString = "fuzzy";
    assert.deepStrictEqual(solution(inputString), "gvaaz");
    console.log('Test 4: ', solution(inputString));

    inputString = "codesignal";
    assert.deepStrictEqual(solution(inputString), "dpeftjhobm");
    console.log('Test 5: ', solution(inputString));
}

testSolution();
