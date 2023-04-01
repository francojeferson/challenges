// This function takes in a string as an argument and determines whether the letters in the string are in alphabetical order.
// The function first creates an array called alphabet that contains all the letters of the alphabet. It does this by looping through each letter in the alphabet and pushing it into the array.
// It then creates a new array called letters which has the same length as alphabet and fills each index with 0.
// Next, it loops through the input string and for each letter it finds the index of that letter in the alphabet array and increments the corresponding index in the letters array.
// Finally, it loops through the letters array and checks if each index (representing a letter) has a count less than or equal to the next index. If it finds an index where the count is greater than the next index, it returns false indicating that the letters are not in alphabetical order. Otherwise, it returns true.

function solution(inputString) {
    const alphabet = [];
    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
        alphabet.push(String.fromCharCode(i));
    }
    const letters = Array(alphabet.length).fill(0);
    for (let letter of inputString) {
        letters[alphabet.indexOf(letter)]++;
    }
    for (let i = 0; i < letters.length; i++) {
        if (letters[i + 1] > letters[i]) {
            return false;
        }
    }
    return true;
}

const assert = require('assert');
function testSolution() {
    try {
        let inputString = "bbbaacdafe";
        assert.deepStrictEqual(solution(inputString), true);
        console.log('Test 1: ', solution(inputString));

        inputString = "aabbb";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 2: ', solution(inputString));

        inputString = "bbc";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 3: ', solution(inputString));

        inputString = "bbbaa";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 4: ', solution(inputString));

        inputString = "abcdefghijklmnopqrstuvwxyzz";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 5: ', solution(inputString));

        inputString = "abcdefghijklmnopqrstuvwxyz";
        assert.deepStrictEqual(solution(inputString), true);
        console.log('Test 6: ', solution(inputString));

        inputString = "abcdefghijklmnopqrstuvwxyzqwertuiopasdfghjklxcvbnm";
        assert.deepStrictEqual(solution(inputString), true);
        console.log('Test 7: ', solution(inputString));

        inputString = "fyudhrygiuhdfeis";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 8: ', solution(inputString));

        inputString = "zaa";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 9: ', solution(inputString));

        inputString = "zyy";
        assert.deepStrictEqual(solution(inputString), false);
        console.log('Test 10: ', solution(inputString));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
