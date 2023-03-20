// This is a function named solution that takes one argument inputString, which is a string.
// Here's how this function works, step by step:

// The inputString is split by the character "-". The resulting string array is stored in variable l.
// If the length of l is not equal to 6, then the function returns false.
// The function loops through each element of l using a for...of loop with an index variable named i.
// Inside the loop, the function checks three conditions:
// a. if the length of i is not equal to 2, it returns false.
// b. if the hexadecimal value of i is NaN (not a number), it returns false.
// c. if the hexadecimal value of the second character of i is NaN, it returns false.
// If the above conditions are met for all elements of l, then the function return true.

// In summary, this function checks if a string has the format of a MAC address (six groups of two hexadecimal digits separated by hyphens). It returns true if the string has this format and false otherwise.

// solution by bandorthild
function solution(inputString) {
    l = inputString.split("-");
    if (l.length != 6) { return false; }
    for (i of l) { if (i.length != 2 || isNaN(parseInt(i, 16)) || isNaN(parseInt(i[1], 16))) { return false; } }
    return true;
}

const assert = require('assert');
function testSolution() {
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
}

testSolution();
