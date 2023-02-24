// When optimizing this code the main changes that were made were to replace the some method with a manual loop and to replace the some method inside the bar function with a loop as well. This was done to improve performance and to prevent the some methods from looping through the entire input array during function execution.
// Na otimização deste código, as principais alterações que foram feitas foram a substituição do método some por um looping manual e a troca do método some dentro da função bar por um looping também. Isso foi feito para melhorar o desempenho e evitar que os métodos some percorram todo o array de entrada durante a execução da função.

const solution = inputArray => {
    const foo = (a, b) =>
        [...a].reduce((pre, val, idx) => pre + (val !== b[idx]), 0) === 1;

    const bar = (a, b) => {
        if (!b.length) return true;

        for (let i = 0; i < b.length; i++) {
            if (foo(a[0], b[i]) && bar([b[i], ...a], b.filter((_, j) => j !== i))) return true;
        }

        return false;
    };

    for (let i = 0; i < inputArray.length; i++) {
        if (bar([inputArray[i]], inputArray.filter((_, j) => j !== i))) return true;
    }

    return false;
};

// unit test
// teste unitário
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
