// The code defines a function named "solution" that takes in an array called "inputArray." The function returns an array containing the longest string(s) in the "inputArray."

// The "reduce()" method is used to iterate through each element of "inputArray."
// For each element of the array, the callback function checks if it is the first element or if its length is greater than the length of the previous element(s).
// If either condition is true, the callback returns a new array containing only the current element.
// If the length of the current element is equal to the length of the previous element(s), the current element is added to the existing array of "r."
// Once all elements have been iterated, the final "r" array will contain only the longest string(s) from the "inputArray."

function solution(inputArray) {
    return inputArray.reduce((r, s, i) => {
        if (!i || r[0].length < s.length) {
            return [s];
        }
        if (r[0].length === s.length) {
            r.push(s);
        }
        return r;
    }, []);
}

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
