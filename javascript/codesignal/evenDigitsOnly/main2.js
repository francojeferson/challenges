// This code defines a function called solution that takes in a parameter n. It then converts n into a string by concatenating it with an empty string ('') using the + operator. This way, the method .match() can be used to check for a pattern.
// The regular expression /[13579]/ checks whether the string has any odd digit between 1 to 9. The ! operator negates the output, so if the string has an odd digit between 1 to 9, the function will return false. Otherwise, it will return true.
// Overall, this code determines whether the input number n has only even digits.

// solution by toby_t1
function solution(n) {
    return !(n + '').match(/[13579]/);
}

const assert = require('assert');
function testSolution() {
    let n = 248622;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 1: ', solution(n));

    n = 642386;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 2: ', solution(n));

    n = 248842;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 3: ', solution(n));

    n = 1;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 4: ', solution(n));

    n = 8;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 5: ', solution(n));

    n = 2462487;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 6: ', solution(n));

    n = 468402800;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 7: ', solution(n));

    n = 2468428;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 8: ', solution(n));

    n = 5468428;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 9: ', solution(n));

    n = 7468428;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 10: ', solution(n));
}

testSolution();
