// The given code defines a function called solution() that takes one parameter symbol. The function returns a Boolean value. It uses a regular expression /^[0-9]$/ and .test() method to check if the provided symbol is a single digit number or not. If the symbol is a number between 0-9 (inclusive), the function returns true. Otherwise, it returns false.

function solution(symbol) {
    return /^[0-9]$/.test(symbol);
}

const assert = require('assert');
function testSolution() {
    let symbol = "0";
    assert.deepStrictEqual(solution(symbol), true);
    console.log('Test 1: ', solution(symbol));

    symbol = "-";
    assert.deepStrictEqual(solution(symbol), false);
    console.log('Test 2: ', solution(symbol));

    symbol = "O";
    assert.deepStrictEqual(solution(symbol), false);
    console.log('Test 3: ', solution(symbol));

    symbol = "1";
    assert.deepStrictEqual(solution(symbol), true);
    console.log('Test 4: ', solution(symbol));

    symbol = "2";
    assert.deepStrictEqual(solution(symbol), true);
    console.log('Test 5: ', solution(symbol));

    symbol = "!";
    assert.deepStrictEqual(solution(symbol), false);
    console.log('Test 6: ', solution(symbol));

    symbol = "@";
    assert.deepStrictEqual(solution(symbol), false);
    console.log('Test 7: ', solution(symbol));

    symbol = "+";
    assert.deepStrictEqual(solution(symbol), false);
    console.log('Test 8: ', solution(symbol));

    symbol = "6";
    assert.deepStrictEqual(solution(symbol), true);
    console.log('Test 9: ', solution(symbol));

    symbol = "(";
    assert.deepStrictEqual(solution(symbol), false);
    console.log('Test 10: ', solution(symbol));

    symbol = ")";
    assert.deepStrictEqual(solution(symbol), false);
    console.log('Test 11: ', solution(symbol));
}

testSolution();
