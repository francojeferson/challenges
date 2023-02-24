// This function creates a new string from an input string. The new string is created by replacing each character of the input string with the next character in the alphabetic sequence. For example, if the input string is "abc", the new string will be "bcd".
// Esta função cria uma nova string a partir de uma string de entrada. A nova string é criada ao substituir cada caractere da string de entrada com o próximo caractere na sequência alfabética. Por exemplo, se a string de entrada for "abc", a nova string será "bcd".

function solution(s) {
    let c = "abcdefghijklmnopqrstuvwxyza";
    let modifiedString = "";
    for (let i = 0; i < s.length; i++) {
        modifiedString += c[c.indexOf(s[i]) + 1];
    }
    return modifiedString;
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
