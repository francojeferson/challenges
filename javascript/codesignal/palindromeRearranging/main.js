// This function counts the number of odd characters in a given string. It creates a character count object to keep track of the number of each character in the string, and then iterates over that object, counting the number of odd-counted characters. If the total number of odd-counted characters is less than or equal to 1, the function returns true, otherwise it returns false.
// Esta função conta o número de caracteres ímpares em uma string fornecida. Ela cria um objeto de contagem de caracteres para manter o controle da quantidade de cada caractere na string, e então faz uma iteração sobre esse objeto, contando o número de caracteres com contagem ímpar. Se o número total de caracteres com contagem ímpar for menor ou igual a 1, a função retorna verdadeiro, caso contrário, retornará falso.

function solution(inputString) {
    const charCount = {};
    for (let i = 0; i < inputString.length; i++) {
        charCount[inputString[i]] = (charCount[inputString[i]] || 0) + 1;
    }
    let oddCount = 0;
    for (let key in charCount) {
        if (charCount[key] % 2 === 1) {
            oddCount++;
        }
    }
    return oddCount <= 1;
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
