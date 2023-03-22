// This code defines a function called "solution" that takes in a parameter "n". It then returns the result of calculating 10 to the power of "n" using the Math.pow() function and subtracting 1 from the result. In other words, it returns a number that has "n" digits and is composed entirely of 9s. For example, if "n" was 3, the function would return 999.

// solution by epunk
function solution(n) {
    return Math.pow(10, n) - 1;
}

const assert = require('assert');
function testSolution() {
    let n = 2;
    assert.deepStrictEqual(solution(n), 99);
    console.log('Test 1: ', solution(n));

    n = 1;
    assert.deepStrictEqual(solution(n), 9);
    console.log('Test 2: ', solution(n));

    n = 7;
    assert.deepStrictEqual(solution(n), 9999999);
    console.log('Test 3: ', solution(n));

    n = 4;
    assert.deepStrictEqual(solution(n), 9999);
    console.log('Test 4: ', solution(n));

    n = 3;
    assert.deepStrictEqual(solution(n), 999);
    console.log('Test 5: ', solution(n));
}

testSolution();
