// This code defines a function called solution that takes in one parameter inputString. The function returns a string that contains a sequence of digits found at the beginning of the input string. Here's a detailed explanation of how the code works:

// inputString.match(/^\d*/): This method is called on the input string to match it to a regular expression. ^\d* selects all digits at the beginning of the input string, allowing for zero or more digits. The "^" means match at the beginning of the string and "\d" matches any digit character. The "*" means match zero or more times of the previous expression.

// [0]: This extracts the first element of the returned array, which is the matched sequence of digits.

// Thus, the returned value is a string of continuous digits at the start of the input string.

// solution by assaf_r
function solution(inputString) {
    return inputString.match(/^\d*/)[0];
}

const assert = require('assert');
function testSolution() {
    try {
        let inputString = "123aa1";
        assert.deepStrictEqual(solution(inputString), "123");
        console.log('Test 1: ', solution(inputString));

        inputString = "0123456789";
        assert.deepStrictEqual(solution(inputString), "0123456789");
        console.log('Test 2: ', solution(inputString));

        inputString = "  3) always check for whitespaces";
        assert.deepStrictEqual(solution(inputString), "");
        console.log('Test 3: ', solution(inputString));

        inputString = "12abc34";
        assert.deepStrictEqual(solution(inputString), "12");
        console.log('Test 4: ', solution(inputString));

        inputString = "the output is 42";
        assert.deepStrictEqual(solution(inputString), "");
        console.log('Test 5: ', solution(inputString));

        inputString = "aaaaaaa";
        assert.deepStrictEqual(solution(inputString), "");
        console.log('Test 6: ', solution(inputString));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
