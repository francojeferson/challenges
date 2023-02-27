// This function adds an asterisk border to an image in array form (array of array). It loops through the image array, adds '*' before and after each row of the array, and puts another set of '*' at the top and bottom of the array, before returning the new array with the border.
// Esta função adiciona uma borda de asteriscos à uma imagem em forma de matriz (array de array). Ela percorre a matriz da imagem, adiciona '*' antes e depois de cada linha da matriz e coloca outro conjunto de '*' no topo e no fundo da matriz, antes de retornar a nova matriz com a borda.

function solution(picture) {
    let result = ['*'.repeat(picture[0].length + 2)];
    for (let i = 0; i < picture.length; i++) {
        result.push('*' + picture[i] + '*');
    }
    result.push('*'.repeat(picture[0].length + 2));

    return result;
}

// unit test
// teste unitário
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
