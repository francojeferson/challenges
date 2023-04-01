// This is a JavaScript function named "solution" that takes in a parameter called "inputString".
// The function uses the "split" method with a delimiter of "-" to split the "inputString" by hyphens and create an array of substrings.
// Then, the "every" method is used to iterate through the array and check if each element matches a regular expression. The regular expression in this case matches two hexadecimal digits (0-9 and A-F) and ensures that there are exactly two of them together.
// If all of the elements in the array match the regular expression, the "every" method will return "true". Otherwise, it will return "false".
// Finally, the "solution" function returns the result of the "every" method as either "true" or "false" depending on whether or not all elements of the input string are valid hexadecimal digits in pairs.

function solution(inputString) {
    return inputString.split('-').every(x => x.match(/^[0-9A-F]{2}$/));
}

const assert = require('assert');
function testSolution() {
    try {
        let inputString = "00-1B-63-84-45-E6";
        assert.deepStrictEqual(solution(inputString), true);
        console.log('Test 1: ', solution(inputString));

        inputString = "Z1-1B-63-84-45-E6";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 2: ', solution(inputString));

        inputString = "not a MAC-48 address";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 3: ', solution(inputString));

        inputString = "FF-FF-FF-FF-FF-FF";
        assert.deepStrictEqual(solution(inputString), true);
        console.log('Test 4: ', solution(inputString));

        inputString = "00-00-00-00-00-00";
        assert.deepStrictEqual(solution(inputString), true);
        console.log('Test 5: ', solution(inputString));

        inputString = "G0-00-00-00-00-00";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 6: ', solution(inputString));

        inputString = "02-03-04-05-06-07-";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 7: ', solution(inputString));

        inputString = "12-34-56-78-9A-BC";
        assert.deepStrictEqual(solution(inputString), true);
        console.log('Test 8: ', solution(inputString));

        inputString = "FF-FF-AB-CD-EA-BC";
        assert.deepStrictEqual(solution(inputString), true);
        console.log('Test 9: ', solution(inputString));

        inputString = "12-34-56-78-9A-BG";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 10: ', solution(inputString));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
