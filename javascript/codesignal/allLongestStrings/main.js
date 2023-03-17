// This is a function that takes an array of strings as its input and returns an array of the longest strings within the input array. Here’s how the code works:

// It initializes a variable called longestString to an empty string and an empty array called result.

// It then loops through the inputArray using a for loop, with the loop ending once i is greater than the length of the inputArray.

// Within the loop, the current string is first saved in the variable currentString.

// It then checks if the currentString is longer than the value stored in the longestString variable. If it is, longestString is updated to hold the currentString, and the result array is reset to an empty array, with longestString subsequently pushed into it.

// If currentString has the same length as longestString, it is simply pushed into the result array.

// Once the loop completes, the function returns the result array containing the longest strings from the input array.

function solution(inputArray) {
    let longestString = '';
    const result = [];

    for (let i = 0; i < inputArray.length; i++) {
        const currentString = inputArray[i];

        if (currentString.length > longestString.length) {
            longestString = currentString;
            result.length = 0;
            result.push(longestString);
        } else if (currentString.length === longestString.length) {
            result.push(currentString);
        }
    }

    return result;
}

const assert = require('assert');
function testSolution() {
    let inputArray = [
        "aba",
        "aa",
        "ad",
        "vcd",
        "aba"];
    assert.deepStrictEqual(solution(inputArray), [
        "aba",
        "vcd",
        "aba"]);
    console.log('Test 1: ', solution(inputArray));

    inputArray = ["aa"];
    assert.deepStrictEqual(solution(inputArray), ["aa"]);
    console.log('Test 2: ', solution(inputArray));

    inputArray = [
        "abc",
        "eeee",
        "abcd",
        "dcd"];
    assert.deepStrictEqual(solution(inputArray), [
        "eeee",
        "abcd"]);
    console.log('Test 3: ', solution(inputArray));

    inputArray = [
        "a",
        "abc",
        "cbd",
        "zzzzzz",
        "a",
        "abcdef",
        "asasa",
        "aaaaaa"];
    assert.deepStrictEqual(solution(inputArray), [
        "zzzzzz",
        "abcdef",
        "aaaaaa"]);
    console.log('Test 4: ', solution(inputArray));

    inputArray = [
        "enyky",
        "benyky",
        "yely",
        "varennyky"];
    assert.deepStrictEqual(solution(inputArray), ["varennyky"]);
    console.log('Test 5: ', solution(inputArray));

    inputArray = [
        "abacaba",
        "abacab",
        "abac",
        "xxxxxx"];
    assert.deepStrictEqual(solution(inputArray), ["abacaba"]);
    console.log('Test 6: ', solution(inputArray));

    inputArray = [
        "young",
        "yooooooung",
        "hot",
        "or",
        "not",
        "come",
        "on",
        "fire",
        "water",
        "watermelon"];
    assert.deepStrictEqual(solution(inputArray), [
        "yooooooung",
        "watermelon"]);
    console.log('Test 7: ', solution(inputArray));

    inputArray = [
        "onsfnib",
        "aokbcwthc",
        "jrfcw"];
    assert.deepStrictEqual(solution(inputArray), ["aokbcwthc"]);
    console.log('Test 8: ', solution(inputArray));

    inputArray = ["lbgwyqkry"];
    assert.deepStrictEqual(solution(inputArray), ["lbgwyqkry"]);
    console.log('Test 9: ', solution(inputArray));

    inputArray = ["i"];
    assert.deepStrictEqual(solution(inputArray), ["i"]);
    console.log('Test 10: ', solution(inputArray));
}

testSolution();
