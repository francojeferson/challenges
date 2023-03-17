// This is a function named "solution" that takes one argument named "picture". The function essentially takes an two-dimensional array of characters (a picture) and surrounds it with asterisks (*) to form a border.
// The function first initializes an empty array named "result", and then it creates a variable "border" which is a string of asterisks that stretches across the entire width of the picture plus an additional two asterisks for the left and right border.
// Then, a for loop is used to iterate over the rows of the picture, and each row is wrapped in asterisks and pushed into the "result" array. Specifically, an asterisk is added at the beginning and at the end of each row.
// Finally, the "border" variable is pushed again into the "result" array to form the bottom border, and the "result" array is returned.

function solution(picture) {
    let result = [];
    let border = '*'.repeat(picture[0].length + 2);
    result.push(border);
    for (let i = 0; i < picture.length; i++) {
        result.push('*' + picture[i] + '*');
    }
    result.push(border);
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
