// This code defines a function called solution which takes in one argument called text. The function then returns the longest word in text.
// Here is how the code works:

// It uses a regular expression /[a-zA-Z]+/g to match all the words in the input text.
// text.match(/[a-zA-Z]+/g) uses the regular expression to return an array of all the matched words.
// .sort((a,b) => b.length - a.length) sorts the array of words in decreasing order of length. This is achieved by subtracting the length of string a from the length of string b.
// [0] returns the first (and longest) word in the sorted array.

// Therefore, the function solution returns the longest word in text.

function solution(text) {
    return text.match(/[a-zA-Z]+/g).sort((a, b) => b.length - a.length)[0];
}

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
