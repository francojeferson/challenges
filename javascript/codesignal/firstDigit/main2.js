// This code defines a function named solution that takes in one argument, inputString.
// The function returns a character from inputString that matches the regular expression pattern /\d/, which searches for the first digit (0-9) in the inputString.
// The matched character is obtained using the search() method and passed as an index to the inputString. The function returns the character at the matched index.

// solution by andriej_king
function solution(inputString) {
    return inputString[inputString.search(/\d/)];
}

const assert = require('assert');
function testSolution() {
    let inputString = "var_1__Int";
    assert.deepStrictEqual(solution(inputString), '1');
    console.log('Test 1: ', solution(inputString));

    inputString = "q2q-q";
    assert.deepStrictEqual(solution(inputString), '2');
    console.log('Test 2: ', solution(inputString));

    inputString = "0ss";
    assert.deepStrictEqual(solution(inputString), '0');
    console.log('Test 3: ', solution(inputString));

    inputString = "_Aas_23";
    assert.deepStrictEqual(solution(inputString), '2');
    console.log('Test 4: ', solution(inputString));

    inputString = "a a_933";
    assert.deepStrictEqual(solution(inputString), '9');
    console.log('Test 5: ', solution(inputString));

    inputString = "ok0";
    assert.deepStrictEqual(solution(inputString), '0');
    console.log('Test 6: ', solution(inputString));
}

testSolution();
