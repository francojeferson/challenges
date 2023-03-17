// The code defines a function called solution that takes in a parameter inputString. The function returns a boolean value which is evaluated by testing whether the inputString matches the given regular expression /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.|$)){4}$/.
// The regular expression pattern specifies the format of an IPv4 address - a string that represents the 32-bit numerical internet protocol address that identifies each sender or receiver of information that is sent in packets across the internet.
// The regular expression matches strings that have the following format:

// Four numeric fields separated by dots
// Each field is between 0-255
// Leading zeros are allowed except for a single zero

// If the input string matches the IPv4 format, the function returns true, otherwise it returns false.

const solution = inputString =>
    /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.|$)){4}$/.test(inputString);

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
