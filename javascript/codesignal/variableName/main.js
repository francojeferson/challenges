// This function checks whether a string given as argument (name) matches a valid variable name pattern. To do so, it uses a regular expression (regex) to check whether the string begins with a letter, hyphen, or underscore, followed by any combination of alphanumeric characters. If the string meets the requirements, the function returns true; otherwise, it returns false.
// Essa função verifica se uma string fornecida como argumento (name) corresponde a um padrão de nome de variável válido. Para isso, ela usa uma expressão regular (regex) para verificar se a string começa com uma letra, hífen ou sublinhado, seguido por qualquer combinação de caracteres alfanuméricos. Se a string atender aos requisitos, a função retornará true; caso contrário, ela retornará false.

function solution(name) {
    const regex = /^[a-zA-Z_][\w]*$/;
    return regex.test(name);
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
