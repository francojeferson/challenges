// This code defines a function called solution that takes in an input string as an argument. The function first initializes a variable called sum to zero and another variable called num to an empty string.
// Then, the function loops through each character of the input string using a for loop. For each character, the function checks whether it is a digit using a regular expression that matches 0-9. If the character is a digit, it adds that character to the num string. If the character is not a digit (e.g., a letter or a symbol), the function adds the value of num (which is a string of digits) to sum, resets num to an empty string, and continues iterating through the string.
// Finally, the function adds the value of num one last time and returns the total sum of all numerical substrings in the input string.

function solution(inputString) {
    let sum = 0;
    let num = '';
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i].match(/[0-9]/)) {
            num += inputString[i];
        } else {
            sum += Number(num);
            num = '';
        }
    }
    sum += Number(num);
    return sum;
}

const assert = require('assert');
function testSolution() {
    let inputString = "2 apples, 12 oranges";
    assert.deepStrictEqual(solution(inputString), 14);
    console.log('Test 1: ', solution(inputString));

    inputString = "123450";
    assert.deepStrictEqual(solution(inputString), 123450);
    console.log('Test 2: ', solution(inputString));

    inputString = "Your payment method is invalid";
    assert.deepStrictEqual(solution(inputString), 0);
    console.log('Test 3: ', solution(inputString));

    inputString = "no digits at all";
    assert.deepStrictEqual(solution(inputString), 0);
    console.log('Test 4: ', solution(inputString));

    inputString = "there are some (12) digits 5566 in this 770 string 239";
    assert.deepStrictEqual(solution(inputString), 6587);
    console.log('Test 5: ', solution(inputString));

    inputString = "42+781";
    assert.deepStrictEqual(solution(inputString), 823);
    console.log('Test 6: ', solution(inputString));

    inputString = "abc abc 4 abc 0 abc";
    assert.deepStrictEqual(solution(inputString), 4);
    console.log('Test 7: ', solution(inputString));

    inputString = "abcdefghijklmnopqrstuvwxyz1AbCdEfGhIjKlMnOpqrstuvwxyz23,74 -";
    assert.deepStrictEqual(solution(inputString), 98);
    console.log('Test 8: ', solution(inputString));
}

testSolution();
