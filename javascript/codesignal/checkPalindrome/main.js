// This code defines a function named solution that takes a string inputString as its parameter.
// The function performs the following tasks:

// It defines a regular expression regex that matches all characters that are not alphanumeric.
// It converts the input string to lowercase and removes all non-alphanumeric characters using replace method, and saves the result in procString variable.
// It reverses the processed string procString by splitting it into an array of characters, reversing the array, and then joining the characters back into a string. Result is saved in integCheck variable.
// It checks if the processed string procString is equal to its reverse integCheck. If yes, it returns true, else it returns false.

// In summary, the function checks if the input string is a palindrome (reads the same forwards and backwards ignoring any non-alphanumeric characters and case).

function solution(inputString) {
    const regex = /[^a-zA-Z0-9]/g;
    procString = inputString.toLowerCase().replace(regex, '');
    integCheck = procString.split('').reverse().join('');
    if (procString === integCheck) return true;
    else return false;
}

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
