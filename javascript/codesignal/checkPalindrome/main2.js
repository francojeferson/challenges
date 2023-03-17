// This code defines a function named solution that takes a single argument, inputString. The function checks whether inputString is a palindrome by comparing it with the result of transforming inputString into an array of its constituent characters using split(''), reversing the order of the characters using reverse(), and then joining them back into a string using join(''). If the two values are equal, the function returns true, meaning the inputString is a palindrome; if not, the function returns false.

function solution(inputString) {
    return inputString == inputString.split('').reverse().join('');
}

const assert = require('assert');
function testSolution() {
    let inputString = "aabaa";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 1: ', solution(inputString));

    inputString = "abac";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 2: ', solution(inputString));

    inputString = "a";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 3: ', solution(inputString));

    inputString = "az";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 4: ', solution(inputString));

    inputString = "abacaba";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 5: ', solution(inputString));

    inputString = "z";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 6: ', solution(inputString));

    inputString = "aaabaaaa";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 7: ', solution(inputString));

    inputString = "zzzazzazz";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 8: ', solution(inputString));

    inputString = "hlbeeykoqqqqokyeeblh";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 9: ', solution(inputString));

    inputString = "hlbeeykoqqqokyeeblh";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 10: ', solution(inputString));
}

testSolution();
