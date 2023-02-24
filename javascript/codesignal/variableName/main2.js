// This function checks whether a supplied string is a valid variable name. It breaks the string into an array of characters and iterates over it. If the first character is a number, it returns false. If any other character is not a valid alphanumeric character (letter, number, underscore), it returns false. If all characters are valid, the function returns true.
// Esta função verifica se uma string fornecida é um nome de variável válido. Ela quebra a string em um array de caracteres e itera sobre ele. Se o primeiro caractere for um número, ela retornará falso. Se qualquer outro caractere não for um caractere alfanumérico válido (letra, número, sublinhado), ela retornará falso. Se todos os caracteres forem válidos, a função retornará verdadeiro.

function solution(name) {
    let array = name.split('');
    for (let i = 0; i < array.length; i++) {
        if (i === 0 && !isNaN(array[i])) return false;
        if (!/[\w_]/.test(array[i])) return false;
    }
    return true;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let name = "var_1__Int";
    assert.deepStrictEqual(solution(name), true);
    console.log('Test 1: ', solution(name));

    name = "qq-q";
    assert.deepStrictEqual(solution(name), false);
    console.log('Test 2: ', solution(name));

    name = "2w2";
    assert.deepStrictEqual(solution(name), false);
    console.log('Test 3: ', solution(name));

    name = " variable";
    assert.deepStrictEqual(solution(name), false);
    console.log('Test 4: ', solution(name));

    name = "va[riable0";
    assert.deepStrictEqual(solution(name), false);
    console.log('Test 5: ', solution(name));

    name = "variable0";
    assert.deepStrictEqual(solution(name), true);
    console.log('Test 6: ', solution(name));

    name = "a";
    assert.deepStrictEqual(solution(name), true);
    console.log('Test 7: ', solution(name));

    name = "_Aas_23";
    assert.deepStrictEqual(solution(name), true);
    console.log('Test 8: ', solution(name));

    name = "a a_2";
    assert.deepStrictEqual(solution(name), false);
    console.log('Test 9: ', solution(name));

    name = "0ss";
    assert.deepStrictEqual(solution(name), false);
    console.log('Test 10: ', solution(name));
}

testSolution();
