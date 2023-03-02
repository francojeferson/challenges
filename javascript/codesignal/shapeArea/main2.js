// This function takes an integer as parameter and returns the result of the sum of the squares of this number and the previous number. For example, if the parameter is 3, the function will return 25 (9 + 16).
// Essa função recebe um número inteiro como parâmetro e retorna o resultado da soma dos quadrados desse número e do número anterior. Por exemplo, se o parâmetro for 3, a função retornará 25 (9 + 16).

function solution(n) {
    return Math.pow(n, 2) + Math.pow(n - 1, 2);
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
