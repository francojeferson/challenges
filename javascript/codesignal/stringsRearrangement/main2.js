// The given code consists of three functions that work together to accomplish a task.
// The solution function accepts an array (inputArray) and returns a boolean value. It checks whether it's possible to construct a word chain by changing exactly one letter at a time, starting from any word in the given input array, and returning to the original word after traversing through all other words in the array. If this is possible, it returns true, otherwise it returns false.
// The findNext function is called inside the solution function. It takes two arguments, a word (current) and an array of words (inputArray). It finds the words that differ from the current word by a single letter and recursively calls itself with these words and the "rest" of the inputArray. It keeps doing this until there's no more words left in the inputArray, or it has found all words that differ by a single letter. It returns the remaining array after finding all the one-letter-difference words.
// The differsByOneChar function is a helper function used by findNext to check if two strings differ by exactly one character. If so, it returns true, otherwise false.

// solution by danielmeeusen
function solution(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        let remaining = findNext(inputArray[i], inputArray);
        if (remaining.length === 0) return true;
    }
    return false;
}

function findNext(current, inputArray) {
    if (inputArray.length === 0) return inputArray;
    for (let i = 0; i < inputArray.length; i++) {
        if (differsByOneChar(current, inputArray[i])) {
            let remaining = findNext(inputArray[i], inputArray.slice(0, i).concat(inputArray.slice(i + 1)));
            if (remaining.length === 0) return remaining;
        }
    }
    return inputArray;
}

function differsByOneChar(s1, s2) {
    let mismatches = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) mismatches++;
        if (mismatches > 1) break;
    }
    return mismatches === 1;
}

const assert = require('assert');
function testSolution() {
    let inputArray = [
        "aba",
        "bbb",
        "bab"];
    assert.deepStrictEqual(solution(inputArray), false);
    console.log('Test 1: ', solution(inputArray));

    inputArray = [
        "ab",
        "bb",
        "aa"];
    assert.deepStrictEqual(solution(inputArray), true);
    console.log('Test 2: ', solution(inputArray));

    inputArray = [
        "q",
        "q"];
    assert.deepStrictEqual(solution(inputArray), false);
    console.log('Test 3: ', solution(inputArray));

    inputArray = [
        "zzzzab",
        "zzzzbb",
        "zzzzaa"];
    assert.deepStrictEqual(solution(inputArray), true);
    console.log('Test 4: ', solution(inputArray));

    inputArray = [
        "ab",
        "ad",
        "ef",
        "eg"];
    assert.deepStrictEqual(solution(inputArray), false);
    console.log('Test 5: ', solution(inputArray));

    inputArray = [
        "abc",
        "bef",
        "bcc",
        "bec",
        "bbc",
        "bdc"];
    assert.deepStrictEqual(solution(inputArray), true);
    console.log('Test 6: ', solution(inputArray));

    inputArray = [
        "abc",
        "abx",
        "axx",
        "abc"];
    assert.deepStrictEqual(solution(inputArray), false);
    console.log('Test 7: ', solution(inputArray));

    inputArray = [
        "abc",
        "abx",
        "axx",
        "abx",
        "abc"];
    assert.deepStrictEqual(solution(inputArray), true);
    console.log('Test 8: ', solution(inputArray));

    inputArray = [
        "f",
        "g",
        "a",
        "h"];
    assert.deepStrictEqual(solution(inputArray), true);
    console.log('Test 9: ', solution(inputArray));

    inputArray = [
        "ff",
        "gf",
        "af",
        "ar",
        "hf"];
    assert.deepStrictEqual(solution(inputArray), true);
    console.log('Test 10: ', solution(inputArray));

    inputArray = [
        "a",
        "b",
        "c"];
    assert.deepStrictEqual(solution(inputArray), true);
    console.log('Test 11: ', solution(inputArray));
}

testSolution();
