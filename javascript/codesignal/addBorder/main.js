// This code defines a function called solution which takes in a single parameter called picture. The picture parameter is expected to be an array of strings.
// The function then creates a new array called result, which is initialized with a single string containing a number of asterisks that is equal to the length of the first string in the picture array plus two.
// The function then loops through each string in the picture array and concatenates an asterisk at the beginning and end of each string. These strings are then pushed into the result array.
// Finally, another string of asterisks, whose length is equal to the length of the first string in the picture array plus two, is added to the end of the result array.
// The result array is then returned from the function.
// The overall effect of this function is to add a border of asterisks around a rectangular "picture" made up of an array of strings.

function solution(picture) {
    let result = ['*'.repeat(picture[0].length + 2)];
    for (let i = 0; i < picture.length; i++) {
        result.push('*' + picture[i] + '*');
    }
    result.push('*'.repeat(picture[0].length + 2));

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
