// This function takes an array of strings as input and returns an array containing only the longest strings. First, the maxSize variable is set to 0. Next, the forEach method is used to step through the input array and update the value of the maxSize variable to the size of the longest string. Finally, the filter method is used to filter the input array and return only strings with a length equal to the value stored in maxSize.
// Esta função recebe um array de strings como entrada e retorna um array contendo apenas as strings mais longas. Primeiro, a variável maxSize é definida como 0. Em seguida, o método forEach é usado para percorrer o array de entrada e atualizar o valor da variável maxSize para o tamanho da string mais longa. Por fim, o método filter é usado para filtrar o array de entrada e retornar apenas as strings com o tamanho igual ao valor armazenado em maxSize.

function solution(inputArray) {
    let maxSize = 0;
    inputArray.forEach(x => maxSize = Math.max(maxSize, x.length));
    return inputArray.filter(x => x.length === maxSize);
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
