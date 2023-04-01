// This code defines a function called solution that takes in one parameter, inputString. This function returns a boolean value that indicates whether or not the input string matches a regular expression pattern for a valid IPv4 address.
// The regular expression is stored in the constant regex. It specifically looks for patterns that consist of four groups of one to three digits, separated by periods. Each group must be between 0 and 255 (inclusive).
// The test function is called on the regex object using the inputString argument. This function returns a boolean value indicating whether or not inputString matches the regex pattern. This boolean value is then returned as the result of the solution function. If the input string is a valid IPv4 format, the function will return true, otherwise it will return false.

function solution(inputString) {
    const regex = /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
    return regex.test(inputString);
}

const assert = require('assert');
function testSolution() {
    try {
        let inputString = "172.16.254.1";
        assert.deepStrictEqual(solution(inputString), true);
        console.log('Test 1: ', solution(inputString));

        inputString = "172.316.254.1";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 2: ', solution(inputString));

        inputString = ".254.255.0";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 3: ', solution(inputString));

        inputString = "1.1.1.1a";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 4: ', solution(inputString));

        inputString = "1";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 5: ', solution(inputString));

        inputString = "0.254.255.0";
        assert.deepStrictEqual(solution(inputString), true);
        console.log('Test 6: ', solution(inputString));

        inputString = "1.23.256.255.";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 7: ', solution(inputString));

        inputString = "1.23.256..";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 8: ', solution(inputString));

        inputString = "0..1.0";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 9: ', solution(inputString));

        inputString = "64.233.161.00";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 10: ', solution(inputString));

        inputString = "64.00.161.131";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 11: ', solution(inputString));

        inputString = "01.233.161.131";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 12: ', solution(inputString));

        inputString = "35..36.9.9.0";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 13: ', solution(inputString));

        inputString = "1.1.1.1.1";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 14: ', solution(inputString));

        inputString = "1.256.1.1";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 15: ', solution(inputString));

        inputString = "a0.1.1.1";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 16: ', solution(inputString));

        inputString = "0.1.1.256";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 17: ', solution(inputString));

        inputString = "129380129831213981.255.255.255";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 18: ', solution(inputString));

        inputString = "255.255.255.255abcdekjhf";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 19: ', solution(inputString));

        inputString = "7283728";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 20: ', solution(inputString));

        inputString = "0..1.0.0";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 21: ', solution(inputString));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
