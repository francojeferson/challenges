// The provided function accepts a two-dimensional array of characters called picture. The function then prefixes and suffixes each line of the picture with an asterisk, and adds an asterisk to the beginning and end of the output array as well. The length of the output array is equal to the length of the input picture array plus two (+2). The resulting output array represents a "frame" created from the input picture array.
// Here is a step-by-step breakdown of the code:

// let width = picture[0].length + 2;

// width is a variable that holds the length of the first line of the picture, plus two.
// This is because the output array needs to have an asterisk at the beginning and end, which adds two additional characters to each line.

// return [
//   '*'.repeat(width), // Top border line
//     ...picture.map(line => ${line}), // Picture + border lines
//       '*'.repeat(width) // Bottom border line
//       ];

// The function returns an array that has three elements.
// The first element is a string consisting of width number of asterisks (this creates the top border of the frame).
// The second element is created by mapping all of the lines in the picture array to include an asterisk at the beginning and end (this creates the framed image).
// The third element is another string consisting of width number of asterisks (this creates the bottom border of the frame).

// Overall, the function takes in a two-dimensional array of characters and returns a new array that frames the original array with asterisks.

// solution by jakzo
function solution(picture) {
    let width = picture[0].length + 2;
    return [
        '*'.repeat(width),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
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
