// This function accepts an array of numbers as input and returns an array of numbers. The function averages the numbers in a 3x3 grid around each element in the original grid. The result is stored in the output matrix, which is reduced to be the same size as the original grid.
// Esta função aceita uma matriz de números como entrada e retorna uma matriz de números. A função calcula a média dos números em uma grade 3x3 ao redor de cada elemento na grade original. O resultado é armazenado na matriz de saída, que é reduzido para ter o mesmo tamanho da grade original.

function solution(image) {
    let result = [];
    for (let i = 0; i < image.length - 2; i++) {
        let row = [];
        for (let j = 0; j < image[i].length - 2; j++) {
            let sum = 0;
            for (let k = 0; k < 3; k++) {
                sum += image[i + k][j] + image[i + k][j + 1] + image[i + k][j + 2];
            }
            row.push(Math.floor(sum / 9));
        }
        result.push(row);
    }
    return result;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let image = [
        [1, 1, 1],
        [1, 7, 1],
        [1, 1, 1]];
    assert.deepStrictEqual(solution(image), [[1]]);
    console.log('Test 1: ', solution(image));

    image = [
        [0, 18, 9],
        [27, 9, 0],
        [81, 63, 45]];
    assert.deepStrictEqual(solution(image), [[28]]);
    console.log('Test 2: ', solution(image));

    image = [
        [36, 0, 18, 9],
        [27, 54, 9, 0],
        [81, 63, 72, 45]];
    assert.deepStrictEqual(solution(image), [[40, 30]]);
    console.log('Test 3: ', solution(image));

    image = [
        [7, 4, 0, 1],
        [5, 6, 2, 2],
        [6, 10, 7, 8],
        [1, 4, 2, 0]];
    assert.deepStrictEqual(solution(image), [
        [5, 4],
        [4, 4]]);
    console.log('Test 4: ', solution(image));

    image = [
        [36, 0, 18, 9, 9, 45, 27],
        [27, 0, 54, 9, 0, 63, 90],
        [81, 63, 72, 45, 18, 27, 0],
        [0, 0, 9, 81, 27, 18, 45],
        [45, 45, 27, 27, 90, 81, 72],
        [45, 18, 9, 0, 9, 18, 45],
        [27, 81, 36, 63, 63, 72, 81]];
    assert.deepStrictEqual(solution(image), [
        [39, 30, 26, 25, 31],
        [34, 37, 35, 32, 32],
        [38, 41, 44, 46, 42],
        [22, 24, 31, 39, 45],
        [37, 34, 36, 47, 59]]);
    console.log('Test 5: ', solution(image));

    image = [
        [36, 0, 18, 9, 9, 45, 27],
        [27, 0, 254, 9, 0, 63, 90],
        [81, 255, 72, 45, 18, 27, 0],
        [0, 0, 9, 81, 27, 18, 45],
        [45, 45, 227, 227, 90, 81, 72],
        [45, 18, 9, 255, 9, 18, 45],
        [27, 81, 36, 127, 255, 72, 81]];
    assert.deepStrictEqual(solution(image), [
        [82, 73, 48, 25, 31],
        [77, 80, 57, 32, 32],
        [81, 106, 88, 68, 42],
        [44, 96, 103, 89, 45],
        [59, 113, 137, 126, 80]]);
    console.log('Test 6: ', solution(image));
}

testSolution();
