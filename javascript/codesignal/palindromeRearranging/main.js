// This code defines a function named solution that takes one parameter inputString which is a string. This function returns a boolean value. It returns true if the input string can be rearranged to form a palindrome, which is a word that is spelled the same way forwards and backwards.
// Here is what the code does step by step:

// Declares an empty object named charCount which will store the count of each character in the input string
// Loops through each character in the provided inputString using a for loop, incrementally adding the count of each character to the charCount object
// Initializes a variable named oddCount to zero
// Loops through each key in the charCount object using a for-in loop
// For each key in the charCount object, if the count of that key value is odd, increments the oddCount variable by one
// If there are more than one characters with odd counts, returns false, otherwise returns true.

function solution(inputString) {
    const charCount = {};
    for (let i = 0; i < inputString.length; i++) {
        charCount[inputString[i]] = (charCount[inputString[i]] || 0) + 1;
    }
    let oddCount = 0;
    for (let key in charCount) {
        if (charCount[key] % 2 === 1) {
            oddCount++;
        }
    }
    return oddCount <= 1;
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
