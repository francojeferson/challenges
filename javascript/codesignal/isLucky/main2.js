// The above code takes an integer as a parameter 'n' and returns a boolean value. The function performs the following steps:

// Initializes a variable called 'count' to 0
// Converts 'n' to a string, splits it into an array of individual digits using the 'split' method, and maps each digit to a number using the 'Number' function. This converts the integer input into an array of numbers.
// Calculates the midpoint of the array by dividing the length by 2 and rounding down with the 'Math.floor' function.
// Loops through the first half of the array from the first digit to the midpoint (exclusive) and adds each digit to the 'count' variable.
// Loops through the second half of the array from the midpoint to the last digit (inclusive) and subtracts each digit from the 'count' variable.
// Returns 'true' if 'count' equals 0, otherwise, returns 'false'.

// The overall purpose of this code is to determine whether the sum of the digits in the first half of the number is equal to the sum of the digits in the second half of the number.

function solution(n) {
    let count = 0;
    n = String(n).split('').map(Number);
    const midIndex = Math.floor(n.length / 2);
    for (let i = 0; i < midIndex; i++) {
        count += n[i];
    }
    for (let i = midIndex; i < n.length; i++) {
        count -= n[i];
    }

    return count == 0;
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
