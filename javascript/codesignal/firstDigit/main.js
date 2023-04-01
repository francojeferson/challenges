// This is a function called "solution" that takes in an input string. The function uses a regular expression with the match method to find the first digit in the input string. If a digit is found, the function returns that digit as a string. If no digit is found, the function returns the string "0".
// The regular expression used (/\d/) matches any digit character. The match method returns an array of matches or null if no matches are found. The [0] at the end of the statement extracts the first item in the array.
// Overall, this function will return the first digit in the input string or '0' if there are no digits in the input string.

function solution(inputString) {
    let firstDigit = inputString.match(/\d/);
    return firstDigit ? firstDigit[0] : '0';
}

const assert = require('assert');
function testSolution() {
    try {
        let inputString = "var_1__Int";
        assert.deepStrictEqual(solution(inputString), '1');
        console.log('Test 1: ', solution(inputString));

        inputString = "q2q-q";
        assert.deepStrictEqual(solution(inputString), '2');
        console.log('Test 2: ', solution(inputString));

        inputString = "0ss";
        assert.deepStrictEqual(solution(inputString), '0');
        console.log('Test 3: ', solution(inputString));

        inputString = "_Aas_23";
        assert.deepStrictEqual(solution(inputString), '2');
        console.log('Test 4: ', solution(inputString));

        inputString = "a a_933";
        assert.deepStrictEqual(solution(inputString), '9');
        console.log('Test 5: ', solution(inputString));

        inputString = "ok0";
        assert.deepStrictEqual(solution(inputString), '0');
        console.log('Test 6: ', solution(inputString));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
