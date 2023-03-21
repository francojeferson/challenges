// The given function takes a string text as input and returns the longest word in the string. The steps that the function follows are as follows:

// It creates a regular expression patt that matches any character that is not an uppercase or lowercase alphabet.
// It then splits the input text string into an array of words using the regular expression patt.
// It then uses the reduce() function to find the longest word in the array text.
// Finally, it returns the longest word found.

// solution by nightfox2
function solution(text) {
    let patt = /[^a-z^A-Z]/;
    text = text.split(patt);
    let longest = text.reduce(function (a, b) { return a.length > b.length ? a : b; });
    return longest;
}

const assert = require('assert');
function testSolution() {
    let text = "Ready, steady, go!";
    assert.deepStrictEqual(solution(text), "steady");
    console.log('Test 1: ', solution(text));

    text = "Ready[[[, steady, go!";
    assert.deepStrictEqual(solution(text), "steady");
    console.log('Test 2: ', solution(text));

    text = "ABCd";
    assert.deepStrictEqual(solution(text), "ABCd");
    console.log('Test 3: ', solution(text));

    text = "To be or not to be";
    assert.deepStrictEqual(solution(text), "not");
    console.log('Test 4: ', solution(text));

    text = "You are the best!!!!!!!!!!!! CodeFighter ever!";
    assert.deepStrictEqual(solution(text), "CodeFighter");
    console.log('Test 5: ', solution(text));
}

testSolution();
