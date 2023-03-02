// This code is a function that takes in a string as an input and returns a boolean value. The function first converts the input string to lowercase and removes any non-alphanumeric characters using a regular expression. It then splits the string into individual characters, reverses the order of the characters, and rejoins them into a new string. Finally, it compares the original processed string to the reversed one and returns true if they are equal or false if they are not.

function solution(inputString) {
    const regex = /[^a-zA-Z0-9]/g;
    procString = inputString.toLowerCase().replace(regex, '');
    integCheck = procString.split('').reverse().join('');
    if (procString === integCheck) return true;
    else return false;
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
