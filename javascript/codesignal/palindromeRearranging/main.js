// This code defines a function called solution that takes a string as an argument. The purpose of this function is to determine whether the string can be rearranged into a palindrome (a word, phrase, or sequence of characters that reads the same backward as forward).
// It works by counting the number of occurrences of each character in the input string. If the number of occurrences of every character in the string is even, then the string can be rearranged into a palindrome. If there is only one character that occurs an odd number of times in the string, then the string can still be rearranged into a palindrome. If there are two or more characters that occur an odd number of times in the string, then the string cannot be rearranged into a palindrome.
// The function does this by creating an object called charCount, which will be used to store the count of each character. Then, it loops through the input string and for each character in the string, it either increments the count of that character in the charCount object or adds the character to the charCount object with a count of 1. After iterating through each character in the input string, it then checks whether the number of occurrences of each character in the string is even or odd. If there is only one character that occurs an odd number of times, it returns true (which means the string can be rearranged into a palindrome), otherwise it returns false (which means the string cannot be rearranged into a palindrome).

function solution(inputString) {
    const charCount = {};
    for (let i = 0; i < inputString.length; i++) {
        if (charCount[inputString[i]]) {
            charCount[inputString[i]]++;
        } else {
            charCount[inputString[i]] = 1;
        }
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
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
