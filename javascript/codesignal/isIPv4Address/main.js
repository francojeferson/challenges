// This is a function called "solution" that takes a string as its argument. The function first creates a regular expression called "regex".
// This regex checks whether the input string is a valid IPv4 address:

// The regex starts by checking 3 groups of numbers separated by periods, where each group can be a single digit (0-9), two digits (10-99), or three digits (100-255).
// After the 3 groups of numbers, the regex checks for a final single digit.

// The function then returns a boolean value depending on whether the input string matches the regex or not. If the input string matches, the function will return "true". Otherwise, it will return "false".

function solution(inputString) {
    const regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    return regex.test(inputString);
}

const assert = require('assert');
function testSolution() {
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
}

testSolution();
