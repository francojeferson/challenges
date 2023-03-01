// This function takes an array of strings as input and returns an array containing the longest strings. It runs through the input array, checking to see which string is the longest. If there are more than one string of the same length, they are added to the result.
// Essa função recebe um array de strings como entrada e retorna um array contendo as strings mais longas. Ela percorre o array de entrada, verificando qual a string mais longa. Se houver mais de uma string com o mesmo tamanho, elas são adicionadas ao resultado.

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

// unit test
// teste unitário
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
