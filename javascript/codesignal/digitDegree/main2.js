// This is a JavaScript function named "solution" that takes a single parameter "n".
// Here is an overview of what this function does:

// Checks if the input number is less than 10. If yes, returns 0.
// If the input number is greater than or equal to 10, it runs a loop.
// Inside the loop, it counts the number of times it has looped using the variable "count".
// It then sums the individual digits of the current value of "n" inside a nested while loop.
// After the inner while loop has finished, the value of "n" is updated to the sum of its digits.
// This process repeats until the value of "n" is less than 10.
// The function returns the number of times the outer loop ran, which corresponds to the number of times the digits of "n" were summed.

// solution by gugo
function solution(n) {
    if (n <= 9) return 0;

    let count = 0;
    while (n >= 10) {
        count++;

        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = n / 10 << 0;
        }
        n = sum;
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
