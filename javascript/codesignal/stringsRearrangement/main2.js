const solution = inputArray => {
    const foo = (a, b) =>
        [...a].reduce((pre, val, idx) => pre + (val !== b[idx]), 0) === 1;

    const bar = (a, b) =>
        !b.length || b.some((val, idx) => foo(a[0], val) && bar([val, ...a], b.filter((_, i) => i !== idx)));

    return inputArray.some((val, idx) => bar([val], inputArray.filter((_, i) => i !== idx)));
};

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputArray = [
        "aba",
        "bbb",
        "bab"];
    assert.equal(solution(inputArray), false);
    console.log('Test 1: ', solution(inputArray));

    inputArray = [
        "ab",
        "bb",
        "aa"];
    assert.equal(solution(inputArray), true);
    console.log('Test 2: ', solution(inputArray));

    inputArray = [
        "q",
        "q"];
    assert.equal(solution(inputArray), false);
    console.log('Test 3: ', solution(inputArray));

    inputArray = [
        "zzzzab",
        "zzzzbb",
        "zzzzaa"];
    assert.equal(solution(inputArray), true);
    console.log('Test 4: ', solution(inputArray));

    inputArray = [
        "ab",
        "ad",
        "ef",
        "eg"];
    assert.equal(solution(inputArray), false);
    console.log('Test 5: ', solution(inputArray));

    inputArray = [
        "abc",
        "bef",
        "bcc",
        "bec",
        "bbc",
        "bdc"];
    assert.equal(solution(inputArray), true);
    console.log('Test 6: ', solution(inputArray));

    inputArray = [
        "abc",
        "abx",
        "axx",
        "abc"];
    assert.equal(solution(inputArray), false);
    console.log('Test 7: ', solution(inputArray));

    inputArray = [
        "abc",
        "abx",
        "axx",
        "abx",
        "abc"];
    assert.equal(solution(inputArray), true);
    console.log('Test 8: ', solution(inputArray));

    inputArray = [
        "f",
        "g",
        "a",
        "h"];
    assert.equal(solution(inputArray), true);
    console.log('Test 9: ', solution(inputArray));

    inputArray = [
        "ff",
        "gf",
        "af",
        "ar",
        "hf"];
    assert.equal(solution(inputArray), true);
    console.log('Test 10: ', solution(inputArray));

    inputArray = [
        "a",
        "b",
        "c"];
    assert.equal(solution(inputArray), true);
    console.log('Test 11: ', solution(inputArray));
}

testSolution();
