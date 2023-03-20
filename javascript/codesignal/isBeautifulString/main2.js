// This is a function called "solution" that takes a string as an input.
// The function first initializes a string variable called "s" with all the lowercase letters of the alphabet.
// Then, the function begins a loop that iterates through each letter of "s," starting with the second letter (since we are checking each letter against the previous letter).
// In each iteration of the loop, the function uses the "split" method to split the input string by the current letter and the previous letter, and counts the number of resulting pieces. If the count for the current letter is greater than the count for the previous letter, the function immediately returns false, indicating that the string is not in alphabetical order.
// If the loop completes without returning false, the function returns true, indicating that the input string is in alphabetical order.
// In summary, the function checks if the given string is in alphabetical order.

// solution by bandorthild
function solution(inputString) {
    s = "abcdefghijklmnopqrstuvwxyz";
    for (i = 1; i < s.length; i++) {
        if (inputString.split(s[i]).length - 1 > inputString.split(s[i - 1]).length - 1) {
            return false;
        }
    }
    return true;
}

const assert = require('assert');
function testSolution() {
    let inputString = "bbbaacdafe";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 1: ', solution(inputString));

    inputString = "aabbb";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 2: ', solution(inputString));

    inputString = "bbc";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 3: ', solution(inputString));

    inputString = "bbbaa";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 4: ', solution(inputString));

    inputString = "abcdefghijklmnopqrstuvwxyzz";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 5: ', solution(inputString));

    inputString = "abcdefghijklmnopqrstuvwxyz";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 6: ', solution(inputString));

    inputString = "abcdefghijklmnopqrstuvwxyzqwertuiopasdfghjklxcvbnm";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 7: ', solution(inputString));

    inputString = "fyudhrygiuhdfeis";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 8: ', solution(inputString));

    inputString = "zaa";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 9: ', solution(inputString));

    inputString = "zyy";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 10: ', solution(inputString));
}

testSolution();
