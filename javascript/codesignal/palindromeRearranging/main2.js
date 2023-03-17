// The code is a function named solution that takes a single string argument inputString. This function is used to determine whether the given string is a palindrome.
// Here are the steps that the function follows:

// .split(''): The inputString is first converted to an array of individual characters.
// .sort(): The array of characters is then sorted in alphabetical order.
// .join(''): The sorted array is then concatenated back into a string.
// .replace(/(\w)\1/g, ''): Any consecutive occurrences of the same character are removed from the string.
// .length < 2: Finally, the function returns a boolean indicating whether the length of the resulting string is less than 2.

// If the length of the final string is less than 2, then the string is a palindrome and the function returns true. Otherwise, it returns false.

function solution(inputString) {
    return inputString.split('').sort().join('').replace(/(\w)\1/g, '').length < 2;
}

const assert = require('assert');
function testSolution() {
    let inputString = "aabb";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 1: ', solution(inputString));

    inputString = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 2: ', solution(inputString));

    inputString = "abbcabb";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 3: ', solution(inputString));

    inputString = "zyyzzzzz";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 4: ', solution(inputString));

    inputString = "z";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 5: ', solution(inputString));

    inputString = "zaa";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 6: ', solution(inputString));

    inputString = "abca";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 7: ', solution(inputString));

    inputString = "abcad";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 8: ', solution(inputString));

    inputString = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 9: ', solution(inputString));

    inputString = "abdhuierf";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 10: ', solution(inputString));
}

testSolution();
