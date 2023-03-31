// This function takes a number n as input and returns the largest possible number that can be obtained by performing a circular shift operation on the digits of n. A circular shift is an operation in which the last digit of a number is moved to the front of the number.
// The function accomplishes this by using a loop to iterate over each digit in n, starting from the least significant digit and working up to the most significant digit. In each iteration of the loop, it performs a circular shift operation on the digit and compares the result to the current maximum value found so far.
// Here is a step-by-step pseudocode plan for the function:

// Initialize a variable m to 0.
// Use a for loop to iterate over each digit d in n, starting from the least significant digit and working up to the most significant digit, multiplying d by 10 in each iteration.
// Inside the loop, use the modulo operator to obtain the remainder of n divided by d, representing the digits to the right of d.
// Use Math.floor(n / d) to obtain the digits to the left of d.
// Divide the result of step 4 by 10 using Math.floor() to remove the least significant digit.
// Multiply the result of step 5 by d to shift the digits to the left in preparation for the circular shift.
// Add the result of step 3 to the result of step 6 to perform the circular shift.
// Use Math.max() to compare the result of step 7 to the current maximum value stored in m.
// Update m with the larger of the two values (the current maximum or the result of step 7).
// After the loop completes, return m as the final result of the function.

// solution by haxified1
function solution(n) {
    let m = 0;
    for (let d = 1; d <= n; d *= 10) {
        let t = n % d + (Math.floor(Math.floor(n / d) / 10) * d);
        m = Math.max(m, t);
    }
    return m;
}

const assert = require('assert');
function testSolution() {
    try {
        let n = 152;
        assert.deepStrictEqual(solution(n), 52);
        console.log('Test 1: ', solution(n));

        n = 1001;
        assert.deepStrictEqual(solution(n), 101);
        console.log('Test 2: ', solution(n));

        n = 10;
        assert.deepStrictEqual(solution(n), 1);
        console.log('Test 3: ', solution(n));

        n = 222219;
        assert.deepStrictEqual(solution(n), 22229);
        console.log('Test 4: ', solution(n));

        n = 109;
        assert.deepStrictEqual(solution(n), 19);
        console.log('Test 5: ', solution(n));

        n = 222250;
        assert.deepStrictEqual(solution(n), 22250);
        console.log('Test 6: ', solution(n));

        n = 44435;
        assert.deepStrictEqual(solution(n), 4445);
        console.log('Test 7: ', solution(n));

        n = 12;
        assert.deepStrictEqual(solution(n), 2);
        console.log('Test 8: ', solution(n));

        n = 218616;
        assert.deepStrictEqual(solution(n), 28616);
        console.log('Test 9: ', solution(n));

        n = 861452;
        assert.deepStrictEqual(solution(n), 86452);
        console.log('Test 10: ', solution(n));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
