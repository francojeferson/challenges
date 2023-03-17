// This function takes in a number n, checks if the sum of the first half of its digits is equal to the sum of the second half of its digits, and returns a boolean value (true if the sum of the first half equals the sum of the second half, and false otherwise).
// Here is a breakdown of what the code does, step by step:

// Convert the number n to a string using .toString(), and store it in the variable str.
// Get the first half of the string by slicing it from the beginning up to (but not including) the middle index, and store it in the variable firstHalf. Similarly, get the second half of the string by slicing it from the middle index up to the end, and store it in the variable secondHalf.
// Convert both the firstHalf and secondHalf strings into arrays of digits using .split('').
// Calculate the sum of all the digits in firstHalf by using .reduce() to add up each digit to a running total, starting at 0. This value is stored in the variable firstHalfSum. Repeat this step for secondHalf, and store the sum of its digits in the variable secondHalfSum.
// Check if firstHalfSum is equal to secondHalfSum, and return this value as a boolean.

function solution(n) {
    let str = n.toString();
    let firstHalf = str.slice(0, str.length / 2);
    let secondHalf = str.slice(str.length / 2);
    let firstHalfSum = firstHalf.split('').reduce((a, b) => a + parseInt(b), 0);
    let secondHalfSum = secondHalf.split('').reduce((a, b) => a + parseInt(b), 0);
    return firstHalfSum === secondHalfSum;
}

const assert = require('assert');
function testSolution() {
    let n = 1230;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 1: ', solution(n));

    n = 239017;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 2: ', solution(n));

    n = 134008;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 3: ', solution(n));

    n = 10;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 4: ', false);

    n = 11;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 5: ', solution(n));

    n = 1010;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 6: ', solution(n));

    n = 261534;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 7: ', solution(n));

    n = 100000;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 8: ', solution(n));

    n = 999999;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 9: ', solution(n));

    n = 123321;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 10: ', solution(n));
}

testSolution();
