// This code defines a function called solution that takes a string (s) as its only argument. Within the function, it creates a new Set object unique which contains all unique characters from the provided string. Finally, the function returns the size of the Set object unique, which gives the count of unique characters in the original string.

function solution(s) {
    let unique = new Set(s);
    return unique.size;
}

const assert = require('assert');
function testSolution() {
    let s = "cabca";
    assert.deepStrictEqual(solution(s), 3);
    console.log('Test 1: ', solution(s));

    s = "aba";
    assert.deepStrictEqual(solution(s), 2);
    console.log('Test 2: ', solution(s));

    s = "ccccccccccc";
    assert.deepStrictEqual(solution(s), 1);
    console.log('Test 3: ', solution(s));

    s = "bcaba";
    assert.deepStrictEqual(solution(s), 3);
    console.log('Test 4: ', solution(s));

    s = "codesignal";
    assert.deepStrictEqual(solution(s), 10);
    console.log('Test 5: ', solution(s));
}

testSolution();
