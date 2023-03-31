// This function takes a positive integer n as input and returns the number of times necessary to perform the following operation: sum the digits of n, and replace n with this sum if this sum has two or more digits. The function does this by repeatedly running the summing operation on n until it has a single digit.
// Here is a step-by-step breakdown of how the function works:

// Create a variable count and initialize it to 0
// While n has more than one digit:
// Convert n to a string, split the string into an array of digits, and use the reduce method to sum the digits
// Update n to be the sum from the previous step
// Increment count by 1

// Return count

// For example, if the input value is 12345, the function would perform the following operations:

// Take the sum of the digits: 1 + 2 + 3 + 4 + 5 = 15
// Since 15 has two digits, repeat the summing operation with 15: 1 + 5 = 6
// Return count as 2, since the function needed to perform two iterations of the operation to get down to one digit.

function solution(n) {
    let count = 0;
    while (n > 9) {
        n = n
            .toString()
            .split('')
            .reduce((a, b) => parseInt(a) + parseInt(b));
        count++;
    }
    return count;
}

const assert = require('assert');
function testSolution() {
    try {
        let n = 5;
        assert.deepStrictEqual(solution(n), 0);
        console.log('Test 1: ', solution(n));

        n = 100;
        assert.deepStrictEqual(solution(n), 1);
        console.log('Test 2: ', solution(n));

        n = 91;
        assert.deepStrictEqual(solution(n), 2);
        console.log('Test 3: ', solution(n));

        n = 99;
        assert.deepStrictEqual(solution(n), 2);
        console.log('Test 4: ', solution(n));

        n = 1_000_000_000;
        assert.deepStrictEqual(solution(n), 1);
        console.log('Test 5: ', solution(n));

        n = 9;
        assert.deepStrictEqual(solution(n), 0);
        console.log('Test 6: ', solution(n));

        n = 73;
        assert.deepStrictEqual(solution(n), 2);
        console.log('Test 7: ', solution(n));

        n = 877;
        assert.deepStrictEqual(solution(n), 2);
        console.log('Test 8: ', solution(n));

        n = 777_773;
        assert.deepStrictEqual(solution(n), 3);
        console.log('Test 9: ', solution(n));

        n = 304;
        assert.deepStrictEqual(solution(n), 1);
        console.log('Test 10: ', solution(n));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
