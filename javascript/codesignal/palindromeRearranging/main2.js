// This function checks whether an input string contains at least two different letters. It starts by splitting the input string into an array of characters, sorts them, puts them back together, and replaces any repeated characters with nothing. Then it checks whether the length of the resulting string is less than 2 - which means that there was only one different character in the input string. If it is, the function returns true; otherwise, false.
// Essa função verifica se uma string de entrada contém pelo menos duas letras diferentes. Ela começa dividindo a string de entrada em um array de caracteres, ordena-os, junta-os novamente e substitui qualquer caractere repetido por nada. Em seguida, ela verifica se o comprimento da string resultante é menor que 2 - o que significa que havia apenas um caractere diferente na string de entrada. Se for, a função retornará true; caso contrário, false.

function solution(inputString) {
    return inputString.split('').sort().join('').replace(/(\w)\1/g, '').length < 2;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputString = "aabb";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 1: ', solution(inputString));

    inputString = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 2: ', solution(inputString));

    inputString = "abbcabb";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 3: ', solution(inputString));

    inputString = "zyyzzzzz";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 4: ', solution(inputString));

    inputString = "z";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 5: ', solution(inputString));

    inputString = "zaa";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 6: ', solution(inputString));

    inputString = "abca";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 7: ', solution(inputString));

    inputString = "abcad";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 8: ', solution(inputString));

    inputString = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 9: ', solution(inputString));

    inputString = "abdhuierf";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 10: ', solution(inputString));
}

testSolution();
