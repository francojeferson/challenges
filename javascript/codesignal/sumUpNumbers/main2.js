// This function takes a string as an input, and returns the sum of all numerical values (integers or floats) found in the input string.
// To achieve this, the match() method is used to find all instances of one or more digits (\d+) in the input string, and returns them in an array. If no digits are found, an empty array is returned instead (which is achieved using the || [] syntax).
// The reduce() method is then used to iterate through the array of numerical string values, and convert them to numbers using the +b syntax. The a + before it then ensures that the resulting values are accumulated and summed up. The 0 parameter at the end specifies the initial value of the accumulator.
// Therefore, the end result is a numerical value representing the sum of all numerical values found in the input string.

// solution by myjinxin2015
function solution(inputString) {
    return (inputString.match(/\d+/g) || []).reduce((a, b) => a + +b, 0);
}

const assert = require('assert');
function testSolution() {
    try {
        let inputString = "2 apples, 12 oranges";
        assert.deepStrictEqual(solution(inputString), 14);
        console.log('Test 1: ', solution(inputString));

        inputString = "123450";
        assert.deepStrictEqual(solution(inputString), 123450);
        console.log('Test 2: ', solution(inputString));

        inputString = "Your payment method is invalid";
        assert.deepStrictEqual(solution(inputString), 0);
        console.log('Test 3: ', solution(inputString));

        inputString = "no digits at all";
        assert.deepStrictEqual(solution(inputString), 0);
        console.log('Test 4: ', solution(inputString));

        inputString = "there are some (12) digits 5566 in this 770 string 239";
        assert.deepStrictEqual(solution(inputString), 6587);
        console.log('Test 5: ', solution(inputString));

        inputString = "42+781";
        assert.deepStrictEqual(solution(inputString), 823);
        console.log('Test 6: ', solution(inputString));

        inputString = "abc abc 4 abc 0 abc";
        assert.deepStrictEqual(solution(inputString), 4);
        console.log('Test 7: ', solution(inputString));

        inputString = "abcdefghijklmnopqrstuvwxyz1AbCdEfGhIjKlMnOpqrstuvwxyz23,74 -";
        assert.deepStrictEqual(solution(inputString), 98);
        console.log('Test 8: ', solution(inputString));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
