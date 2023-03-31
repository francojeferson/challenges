// This is a function called solution that takes in an integer n. The function then performs two operations on n:

// Divide n by 10, and use the bitwise OR operator (|) followed by 0 to round down to the nearest integer (effectively removing any decimal places). This operation effectively removes the last digit from n.
// Find the remainder of n divided by 10. This operation effectively isolates the last digit from n.

// Finally, the function returns the sum of these two values, which is essentially the sum of the first and last digit of the original integer n.

// solution by jakzo
function solution(n) {
    return (n / 10 | 0) + n % 10;
}

const assert = require('assert');
function testSolution() {
    try {
        let n = 29;
        assert.deepStrictEqual(solution(n), 11);
        console.log('Test 1: ', solution(n));

        n = 48;
        assert.deepStrictEqual(solution(n), 12);
        console.log('Test 2: ', solution(n));

        n = 10;
        assert.deepStrictEqual(solution(n), 1);
        console.log('Test 3: ', solution(n));

        n = 25;
        assert.deepStrictEqual(solution(n), 7);
        console.log('Test 4: ', solution(n));

        n = 52;
        assert.deepStrictEqual(solution(n), 7);
        console.log('Test 5: ', solution(n));

        n = 99;
        assert.deepStrictEqual(solution(n), 18);
        console.log('Test 6: ', solution(n));

        n = 44;
        assert.deepStrictEqual(solution(n), 8);
        console.log('Test 7: ', solution(n));

        n = 50;
        assert.deepStrictEqual(solution(n), 5);
        console.log('Test 8: ', solution(n));

        n = 39;
        assert.deepStrictEqual(solution(n), 12);
        console.log('Test 9: ', solution(n));

        n = 26;
        assert.deepStrictEqual(solution(n), 8);
        console.log('Test 10: ', solution(n));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
