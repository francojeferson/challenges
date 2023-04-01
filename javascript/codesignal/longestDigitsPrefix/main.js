// This is a JavaScript function that takes a string as an argument and returns a new string with only the digits (0-9) found at the beginning of the input string. Here is a step-by-step explanation:

// Initialize an empty string variable called 'result'.
// Use a for loop to iterate over each character in the input string.
// Use an if statement to check if the current character is a digit. If it is, then add it to the 'result' string.
// If the current character is not a digit, the loop will break and the 'result' string (which contains only digits found at the beginning of the input string) will be returned.

function solution(inputString) {
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] >= "0" && inputString[i] <= "9") {
            result += inputString[i];
        } else {
            break;
        }
    }
    return result;
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
