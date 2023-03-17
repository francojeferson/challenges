// This function takes in two strings, s1 and s2. It loops through each character in s1 and checks if s2 contains that character. If so, it increments a count variable and removes that character from s2. The function then returns the final count of characters that were found in both s1 and s2.

function solution(s1, s2) {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            count++;
            s2 = s2.replace(s1[i], "");
        }
    }

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
