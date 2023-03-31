// This code defines a function called "solution" that takes a single parameter "inputString". The function then applies a series of operations on the input string and returns the modified string.
// The operations are as follows:

// The input string is first split into an array of characters using the .split('') method.
// Then, the .map() method is used to iterate through each character in the array and modify it based on a conditional statement.
// The conditional statement checks whether the character's unicode value is equal to 122 (which represents the letter "z").
// If it is "z", then the replacement value for that character is set to "a".
// If it is not "z", then the replacement value for that character is set to the next character in the alphabet using the .fromCharCode() method to convert the unicode value of the next character to its corresponding character value.
// Finally, the modified array of characters is converted back to a string using the .join() method, and that new string is returned as the output of the function.

// Essentially, this function takes a string and shifts every character in the string by one letter in the alphabet (with "z" wrapping back around to "a").

function solution(inputString) {
    return inputString
        .split('')
        .map(char => char.charCodeAt(0) === 122 ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');
}

const assert = require('assert');
function testSolution() {
    try {
        let inputString = "crazy";
        assert.deepStrictEqual(solution(inputString), "dsbaz");
        console.log('Test 1: ', solution(inputString));

        inputString = "z";
        assert.deepStrictEqual(solution(inputString), "a");
        console.log('Test 2: ', solution(inputString));

        inputString = "aaaabbbccd";
        assert.deepStrictEqual(solution(inputString), "bbbbcccdde");
        console.log('Test 3: ', solution(inputString));

        inputString = "fuzzy";
        assert.deepStrictEqual(solution(inputString), "gvaaz");
        console.log('Test 4: ', solution(inputString));

        inputString = "codesignal";
        assert.deepStrictEqual(solution(inputString), "dpeftjhobm");
        console.log('Test 5: ', solution(inputString));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
