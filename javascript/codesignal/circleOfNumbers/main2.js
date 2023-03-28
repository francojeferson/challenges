// The function solution takes two arguments: n and firstNumber. It divides n by 2 and assigns the result to a temporary variable tmp. If tmp is greater than firstNumber, the function returns the sum of tmp and firstNumber. Otherwise, it returns the difference between firstNumber and tmp. Essentially, the function is trying to determine the arithmetic mean of n and firstNumber and return that value.

// solution by eric_noh
function solution(n, firstNumber) {
    let tmp = n / 2;
    if (tmp > firstNumber) return tmp + firstNumber;
    return firstNumber - tmp;
}

const assert = require('assert');
function testSolution() {
    let n = 10;
    let firstNumber = 2;
    assert.deepStrictEqual(solution(n, firstNumber), 7);
    console.log('Test 1: ', solution(n, firstNumber));

    n = 10;
    firstNumber = 7;
    assert.deepStrictEqual(solution(n, firstNumber), 2);
    console.log('Test 2: ', solution(n, firstNumber));

    n = 4;
    firstNumber = 1;
    assert.deepStrictEqual(solution(n, firstNumber), 3);
    console.log('Test 3: ', solution(n, firstNumber));

    n = 6;
    firstNumber = 3;
    assert.deepStrictEqual(solution(n, firstNumber), 0);
    console.log('Test 4: ', solution(n, firstNumber));

    n = 18;
    firstNumber = 6;
    assert.deepStrictEqual(solution(n, firstNumber), 15);
    console.log('Test 5: ', solution(n, firstNumber));

    n = 12;
    firstNumber = 10;
    assert.deepStrictEqual(solution(n, firstNumber), 4);
    console.log('Test 6: ', solution(n, firstNumber));

    n = 18;
    firstNumber = 5;
    assert.deepStrictEqual(solution(n, firstNumber), 14);
    console.log('Test 7: ', solution(n, firstNumber));
}

testSolution();
