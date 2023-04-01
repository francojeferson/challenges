// This code defines a function called "solution" that takes in a parameter "n". The function then returns the sum of the square of "n" and the square of "n-1". The Math.pow() function is used to compute the power of the numbers.

// solution by bobziroll
function solution(n) {
    return Math.pow(n, 2) + Math.pow(n - 1, 2);
}

const assert = require('assert');
function testSolution() {
    try {
        let n = 2;
        assert.deepStrictEqual(solution(n), 5);
        console.log('Test 1: ', solution(n));

        n = 3;
        assert.deepStrictEqual(solution(n), 13);
        console.log('Test 2: ', solution(n));

        n = 1;
        assert.deepStrictEqual(solution(n), 1);
        console.log('Test 3: ', solution(n));

        n = 5;
        assert.deepStrictEqual(solution(n), 41);
        console.log('Test 4: ', solution(n));

        n = 7000;
        assert.deepStrictEqual(solution(n), 97_986_001);
        console.log('Test 5: ', solution(n));

        n = 8000;
        assert.deepStrictEqual(solution(n), 127_984_001);
        console.log('Test 6: ', solution(n));

        n = 9999;
        assert.deepStrictEqual(solution(n), 199_940_005);
        console.log('Test 7: ', solution(n));

        n = 9998;
        assert.deepStrictEqual(solution(n), 199_900_013);
        console.log('Test 8: ', solution(n));

        n = 8999;
        assert.deepStrictEqual(solution(n), 161_946_005);
        console.log('Test 9: ', solution(n));

        n = 100;
        assert.deepStrictEqual(solution(n), 19801);
        console.log('Test 10: ', solution(n));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
