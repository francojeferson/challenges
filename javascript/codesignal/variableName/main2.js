// This script defines a function solution(name) that takes in a parameter name, which is a string. It then splits the string into an array of individual characters using the split() method. Next, it loops through the array using a for loop with a counter i. Inside the loop, there are two conditionals that check if the character at the current index is a digit, letter, or underscore using the helper functions isDigit(), isLetter(), and isUnderscore().
// If the first character is a digit or if any character is not a digit, letter, or underscore, the function returns false. If all characters pass the check, the function returns true.
// The three helper functions simply check if the given character is a digit, underscore, or letter respectively.
// In summary, this function checks if a given string may be used as a name of a variable in a programming language, and returns true if it is valid and false if not.

// solution by fernando_a15
function solution(name) {
    let array = name.split('');
    for (let i = 0; i < array.length; i++) {
        if (i === 0 && isDigit(array[i]))
            return false;
        if (!(isDigit(array[i]) || isLetter(array[i]) || isUnderscore(array[i])))
            return false;
    }
    return true;
}

function isDigit(c) {
    return '0123456789'.indexOf(c) !== -1;
}

function isUnderscore(c) {
    return '_'.indexOf(c) !== -1;
}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

const assert = require('assert');
function testSolution() {
    let name = "var_1__Int";
    assert.deepStrictEqual(solution(name), true);
    console.log('Test 1: ', solution(name));

    name = "qq-q";
    assert.deepStrictEqual(solution(name), false);
    console.log('Test 2: ', solution(name));

    name = "2w2";
    assert.deepStrictEqual(solution(name), false);
    console.log('Test 3: ', solution(name));

    name = " variable";
    assert.deepStrictEqual(solution(name), false);
    console.log('Test 4: ', solution(name));

    name = "va[riable0";
    assert.deepStrictEqual(solution(name), false);
    console.log('Test 5: ', solution(name));

    name = "variable0";
    assert.deepStrictEqual(solution(name), true);
    console.log('Test 6: ', solution(name));

    name = "a";
    assert.deepStrictEqual(solution(name), true);
    console.log('Test 7: ', solution(name));

    name = "_Aas_23";
    assert.deepStrictEqual(solution(name), true);
    console.log('Test 8: ', solution(name));

    name = "a a_2";
    assert.deepStrictEqual(solution(name), false);
    console.log('Test 9: ', solution(name));

    name = "0ss";
    assert.deepStrictEqual(solution(name), false);
    console.log('Test 10: ', solution(name));
}

testSolution();
