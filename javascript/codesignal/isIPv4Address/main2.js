// This code defines a JavaScript function called solution that takes a string argument inputString.
// The function tests if the given inputString matches the regular expression pattern.
// The regular expression contains a combination of subpatterns that are matched against the input string.
// The test() method returns a boolean true/false result whether or not inputString matches the expression pattern.

// solution by Olexa
const solution = inputString =>
    /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(?!$)|$)){4}$/.test(inputString);

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
