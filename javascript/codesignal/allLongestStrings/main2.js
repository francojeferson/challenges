// This function takes an array of strings (inputArray) and returns an array of only the strings that have the maximum length. The code first calculates the maximum length value using the Math.max function along with the spread operator and the map function to create an array of all the string lengths. The filter function is then used to return only the strings whose length is equal to the maximum size.

// solution by xyrn
function solution(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
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
