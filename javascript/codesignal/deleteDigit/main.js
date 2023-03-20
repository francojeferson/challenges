// This function takes a number n as input and returns the maximum number that can be obtained by removing one digit from n.
// First, the input number n is converted to a string using toString() method and stored in a variable str.
// Then, a for loop is used to iterate over each digit of the string str. In each iteration, the digit at the current index i is removed using slice() method and the resulting string is converted back to a number using parseInt() method. This number is then compared with the current maximum value stored in the variable max. If the new number is greater than the current maximum value, then the max variable is updated with the new number.
// Finally, the function returns the maximum value obtained after removing one digit from the input number.
// For example, if the input number is 12345, the function will return 1235 because it is the maximum value that can be obtained by removing one digit from 12345 (e.g., remove 4: 1235, remove 5: 1234, remove 1: 2345, remove 2: 1345, remove 3: 1245).

function solution(n) {
    let max = 0;
    const str = n.toString();
    for (let i = 0; i < str.length; i++) {
        const num = parseInt(str.slice(0, i) + str.slice(i + 1));
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const assert = require('assert');
function testSolution() {
    let n = 152;
    assert.deepStrictEqual(solution(n), 52);
    console.log('Test 1: ', solution(n));

    n = 1001;
    assert.deepStrictEqual(solution(n), 101);
    console.log('Test 2: ', solution(n));

    n = 10;
    assert.deepStrictEqual(solution(n), 1);
    console.log('Test 3: ', solution(n));

    n = 222219;
    assert.deepStrictEqual(solution(n), 22229);
    console.log('Test 4: ', solution(n));

    n = 109;
    assert.deepStrictEqual(solution(n), 19);
    console.log('Test 5: ', solution(n));

    n = 222250;
    assert.deepStrictEqual(solution(n), 22250);
    console.log('Test 6: ', solution(n));

    n = 44435;
    assert.deepStrictEqual(solution(n), 4445);
    console.log('Test 7: ', solution(n));

    n = 12;
    assert.deepStrictEqual(solution(n), 2);
    console.log('Test 8: ', solution(n));

    n = 218616;
    assert.deepStrictEqual(solution(n), 28616);
    console.log('Test 9: ', solution(n));

    n = 861452;
    assert.deepStrictEqual(solution(n), 86452);
    console.log('Test 10: ', solution(n));
}

testSolution();
