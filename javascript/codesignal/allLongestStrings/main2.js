// This code defines a function called solution that takes an array of strings called inputArray as an input. The goal of the function is to filter the input array and return a new array of strings that have the maximum length among all the strings in the input array.
// The function initializes a variable maxSize to 0, which will be used to store the maximum length of any string in the input array. It then uses the forEach method to iterate over each element x in the inputArray, and updates maxSize to be the maximum value between maxSize and the length of x.
// Finally, the function returns a new array obtained by filtering the inputArray to only contain strings of length equal to maxSize. The filter method is used to return a new array that only includes elements x for which the expression x.length === maxSize is true.

function solution(inputArray) {
    let maxSize = 0;
    inputArray.forEach(x => maxSize = Math.max(maxSize, x.length));
    return inputArray.filter(x => x.length === maxSize);
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
