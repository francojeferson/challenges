// This code defines a function called "solution" which takes two string arguments named "s1" and "s2". The purpose of the function is to count the number of characters in string "s2" that are also present in string "s1".
// To do this, the function takes each character in string "s1" and replaces all instances of it in string "s2" with the character "!". This effectively removes all matching characters from "s2", leaving only characters that don't appear in "s1".
// Finally, the function uses a regular expression to count the remaining non-"!" characters in "s2" and returns that count.

// solution by lifeofnations
function solution(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        s2 = s2.replace(s1[i], "!");
    }
    return s2.replace(/[^!]/g, "").length;
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
