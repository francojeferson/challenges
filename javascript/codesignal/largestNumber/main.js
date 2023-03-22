// This code defines a function named solution that takes a single parameter n. When solution is called, it returns the numeric value of a string that is comprised of the digit 9 repeated n times. The repeat function is a built-in JavaScript function that repeats a string a specified number of times. The parseInt function is a built-in JavaScript function that converts a string to a number. Therefore, the function solution returns an integer consisting of n nines.

function solution(n) {
    return parseInt('9'.repeat(n));
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
