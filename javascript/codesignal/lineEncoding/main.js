// This code defines a function named solution. The function takes a string s as input and returns a modified version of the string. The modification involves counting the number of consecutive characters and enclosing each count and its corresponding character in a string. For example, if the input string is 'aaabb', the function will return 'a3b2'. Here is a step-by-step pseudocode for this code:

// Define a function named solution that takes an input parameter s.
// Declare three variables: result which is initialized to an empty string, current which is also initialized to an empty string, and count which is initialized to zero.
// Create a for loop that will iterate through each character in the string s.
// Inside the for loop, create an if statement that checks if the current character is equal to the previous character current.
// If the current character is equal to the previous character, increment the count variable by one.
// If the current character is not equal to the previous character, append count to result if the count count greater than 1. Append current to result. Set current equal to the current character and count equal to 1.
// After the for loop, append the final count to result if count is greater than 1. Append the final current to result.
// Return the result.

function solution(s) {
    let result = '';
    let current = '';
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (current === s[i]) {
            count++;
        } else {
            if (count > 1) {
                result += count;
            }
            result += current;
            current = s[i];
            count = 1;
        }
    }
    if (count > 1) {
        result += count;
    }
    result += current;
    return result;
}

const assert = require('assert');
function testSolution() {
    try {
        let s = "aabbbc";
        assert.deepStrictEqual(solution(s), "2a3bc");
        console.log('Test 1: ', solution(s));

        s = "abbcabb";
        assert.deepStrictEqual(solution(s), "a2bca2b");
        console.log('Test 2: ', solution(s));

        s = "abcd";
        assert.deepStrictEqual(solution(s), "abcd");
        console.log('Test 3: ', solution(s));

        s = "zzzz";
        assert.deepStrictEqual(solution(s), "4z");
        console.log('Test 4: ', solution(s));

        s = "wwwwwwwawwwwwww";
        assert.deepStrictEqual(solution(s), "7wa7w");
        console.log('Test 5: ', solution(s));

        s = "ccccccccccccccc";
        assert.deepStrictEqual(solution(s), "15c");
        console.log('Test 6: ', solution(s));

        s = "qwertyuioplkjhg";
        assert.deepStrictEqual(solution(s), "qwertyuioplkjhg");
        console.log('Test 7: ', solution(s));

        s = "ssiiggkooo";
        assert.deepStrictEqual(solution(s), "2s2i2gk3o");
        console.log('Test 8: ', solution(s));

        s = "adfaaa";
        assert.deepStrictEqual(solution(s), "adf3a");
        console.log('Test 9: ', solution(s));

        s = "bbjaadlkjdl";
        assert.deepStrictEqual(solution(s), "2bj2adlkjdl");
        console.log('Test 10: ', solution(s));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
