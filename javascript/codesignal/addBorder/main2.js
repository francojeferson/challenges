// This function creates a frame around the picture. The variable "width" sets the length of the frame to the width of the picture plus two. The result is an array of strings, with each string being a line of the frame. The lines are added to the array, starting with one asterisk line and ending with another. The resulting array is then returned.
// Esta função cria um quadro em volta da imagem (picture). A variável "width" define o comprimento do quadro como a largura da imagem mais dois. O resultado é uma matriz de strings, com cada string sendo uma linha do quadro. As linhas são adicionadas à matriz, começando com uma linha de asteriscos e terminando com outra. A matriz resultante é então retornada.

function solution(picture) {
    let width = picture[0].length + 2;
    let result = ['*'.repeat(width)];

    for (let line of picture) {
        result.push(`*${line}*`);
    }

    result.push('*'.repeat(width));

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
