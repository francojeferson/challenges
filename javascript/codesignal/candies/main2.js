// This code defines a function named solution that takes two parameters n and m. It then returns the result of m - m % n.
// The % operator is the modulo operator, which finds the remainder of division. In this case, m % n finds the remainder when m is divided by n. Subtracting that value from m gives the largest multiple of n that is less than or equal to m.

// solution by jakzo
function solution(n, m) {
    return m - m % n;
}

const assert = require('assert');
function testSolution() {
    try {
        let n = 3;
        let m = 10;
        assert.deepStrictEqual(solution(n, m), 9);
        console.log('Test 1: ', solution(n, m));

        n = 1;
        m = 2;
        assert.deepStrictEqual(solution(n, m), 2);
        console.log('Test 2: ', solution(n, m));

        n = 10;
        m = 5;
        assert.deepStrictEqual(solution(n, m), 0);
        console.log('Test 3: ', solution(n, m));

        n = 4;
        m = 4;
        assert.deepStrictEqual(solution(n, m), 4);
        console.log('Test 4: ', solution(n, m));

        n = 4;
        m = 15;
        assert.deepStrictEqual(solution(n, m), 12);
        console.log('Test 5: ', solution(n, m));

        n = 9;
        m = 100;
        assert.deepStrictEqual(solution(n, m), 99);
        console.log('Test 6: ', solution(n, m));

        n = 8;
        m = 2;
        assert.deepStrictEqual(solution(n, m), 0);
        console.log('Test 7: ', solution(n, m));

        n = 3;
        m = 3;
        assert.deepStrictEqual(solution(n, m), 3);
        console.log('Test 8: ', solution(n, m));

        n = 7;
        m = 10;
        assert.deepStrictEqual(solution(n, m), 7);
        console.log('Test 9: ', solution(n, m));

        n = 3;
        m = 23;
        assert.deepStrictEqual(solution(n, m), 21);
        console.log('Test 10: ', solution(n, m));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
