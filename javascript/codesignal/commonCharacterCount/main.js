// This code defines a function named "solution" that takes two parameters "s1" and "s2" which are strings. The function returns a count of the number of characters that appears in both "s1" and "s2".
// Here's a detailed explanation of what the code does step by step:

// A variable "count" is initialized to zero
// The variables "s1" and "s2" are converted to arrays of characters using the ".split()" method.
// The ".forEach()" method is called on "s1" to loop through each character.
// For each character in "s1", an "if" condition checks if the character is present in "s2" using the ".includes()" method.
// If the character is present in "s2", the count is incremented by 1 and the character is removed from "s2" using the ".splice()" method.
// After all characters in "s1" have been checked, the count is returned.

function solution(s1, s2) {
    let count = 0;
    s1 = s1.split('');
    s2 = s2.split('');
    s1.forEach((e) => {
        if (s2.includes(e)) {
            count++;
            s2.splice(s2.indexOf(e), 1);
        }
    });
    return count;
}

const assert = require('assert');
function testSolution() {
    let s1 = "aabcc";
    let s2 = "adcaa";
    assert.deepStrictEqual(solution(s1, s2), 3);
    console.log('Test 1: ', solution(s1, s2));

    s1 = "zzzz";
    s2 = "zzzzzzz";
    assert.deepStrictEqual(solution(s1, s2), 4);
    console.log('Test 2: ', solution(s1, s2));

    s1 = "abca";
    s2 = "xyzbac";
    assert.deepStrictEqual(solution(s1, s2), 3);
    console.log('Test 3: ', solution(s1, s2));

    s1 = "a";
    s2 = "b";
    assert.deepStrictEqual(solution(s1, s2), 0);
    console.log('Test 4: ', solution(s1, s2));

    s1 = "a";
    s2 = "aaa";
    assert.deepStrictEqual(solution(s1, s2), 1);
    console.log('Test 5: ', solution(s1, s2));
}

testSolution();
