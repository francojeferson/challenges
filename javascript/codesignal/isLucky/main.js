// The code defines a function solution that takes an integer n as an argument. The function then converts the integer to a string, splits the string in half, and sums the digits in the first half of the string and in the second half of the string. Finally, the function returns a boolean value: true if the sum of the digits in the first half is equal to the sum of the digits in the second half, and false otherwise.

function solution(n) {
    let str = n.toString();
    let halfLength = str.length / 2;
    let firstHalfSum = 0;
    let secondHalfSum = 0;

    for (let i = 0; i < halfLength; i++) {
        firstHalfSum += parseInt(str[i]);
        secondHalfSum += parseInt(str[halfLength + i]);
    }

    return firstHalfSum === secondHalfSum;
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
