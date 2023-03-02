// This function returns the square of the sum of two consecutive numbers. For example, if the number is 3, the function returns 16 (3² + 2²).
// Essa função retorna o quadrado da soma de dois números consecutivos. Por exemplo, se o número for 3, a função retornará 16 (3² + 2²).

function solution(n) {
    return n * n + (n - 1) * (n - 1);
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
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
}

testSolution();
