// The solution function takes in a string as an argument and returns the same string with each letter shifted one character forward in the alphabet. The variable c is a string of all the letters of the alphabet plus one extra "z" at the end, and is used to get the next character for each letter in inputString.
// The .replace() method is used to iterate over each character in inputString and replaces it with the next character in c. The . in /./g means to match any character in inputString. The second argument in .replace() is a function that takes in the matched character as an argument x. It finds the index of x in c and adds 1 to it, to get the index of the next character in c. Finally, it returns the character at the next index in c.

// solution by myjinxin2015
function solution(inputString) {
    let c = "abcdefghijklmnopqrstuvwxyza";
    return inputString.replace(/./g, x => c[c.indexOf(x) + 1]);
}

const assert = require('assert');
function testSolution() {
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
}

testSolution();
