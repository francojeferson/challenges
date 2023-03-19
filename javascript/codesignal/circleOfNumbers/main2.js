// This code defines a function called solution which takes in two parameters: n and firstNumber. The n parameter represents the length of a list of numbers, and firstNumber represents the first number of the list.
// The function then calculates the middle number of this list, by adding n / 2 to the firstNumber. This is stored in a variable called x.
// Next, the code checks if x is greater than or equal to n. If it is, the code subtracts n from x and returns the result. Otherwise, it just returns x.
// Essentially, the code is finding the middle number of a list by adding n / 2 to firstNumber, and then wrapping back around to the beginning of the list if the middle number goes past the end of the list.

// solution by mrworral
function solution(n, firstNumber) {
    let x = firstNumber + n / 2;
    return x >= n ? x - n : x;
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
