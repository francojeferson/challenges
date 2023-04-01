// This is a function named solution that takes a parameter named symbol. The purpose of the function is to determine if the given value of symbol is a number or not. The isNaN() function is used to check if the value passed to the symbol parameter is not a number, and the ! operator is then used to reverse the boolean value returned by isNaN() function result. If the value of symbol is a number, the isNaN() function will return false, and the ! operator will convert it to true, which will be returned by the function. If the value of symbol is not a number, the isNaN() function will return true, and the ! operator will convert it to false, which will be returned by the function.

// solution by bandorthild
function solution(symbol) {
    return !isNaN(symbol);
}

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
