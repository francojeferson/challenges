// This is a function named solution that takes a 2D array called picture as argument. The picture array is assumed to have the same length of strings in all its subarrays. The function adds a border of '*' around the picture array by inserting '*' characters at the beginning and end of each string in the picture array and then adding a row of ' *' at the top and bottom of the picture array.
// The function begins by calculating the width of the final bordered image. It does this by taking the length of the first string in the picture array, then adding 2 (one for the '*' character at the beginning and one for the '*' character at the end.)
// It then creates an array called result containing one string that is width characters long and consists entirely of '*'.
// Next, the function iterates over each string in the picture array and adds a '*' at the beginning and end of the string before pushing it onto the result array.
// Finally, the function pushes another string of '*' characters that is also width characters long to the result array, effectively creating the bottom border of the image.
// The result array is then returned, which is the bordered image represented as an array of strings.

function solution(picture) {
    let width = picture[0].length + 2;
    let result = ['*'.repeat(width)];

    for (let line of picture) {
        result.push(`*${line}*`);
    }

    result.push('*'.repeat(width));

    return result;
}

const assert = require('assert');
function testSolution() {
    let picture = [
        "abc",
        "ded"];
    assert.deepStrictEqual(solution(picture), [
        "*****",
        "*abc*",
        "*ded*",
        "*****"]);
    console.log('Test 1: ', solution(picture));

    picture = ["a"];
    assert.deepStrictEqual(solution(picture), [
        "***",
        "*a*",
        "***"]);
    console.log('Test 2: ', solution(picture));

    picture = [
        "aa",
        "**",
        "zz"];
    assert.deepStrictEqual(solution(picture), [
        "****",
        "*aa*",
        "****",
        "*zz*",
        "****"]);
    console.log('Test 3: ', solution(picture));

    picture = [
        "abcde",
        "fghij",
        "klmno",
        "pqrst",
        "uvwxy"];
    assert.deepStrictEqual(solution(picture), [
        "*******",
        "*abcde*",
        "*fghij*",
        "*klmno*",
        "*pqrst*",
        "*uvwxy*",
        "*******"]);
    console.log('Test 4: ', solution(picture));

    picture = ["wzy**"];
    assert.deepStrictEqual(solution(picture), [
        "*******",
        "*wzy***",
        "*******"]);
    console.log('Test 5: ', solution(picture));
}

testSolution();
