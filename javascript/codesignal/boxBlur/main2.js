// This code is used to apply a blur filter to an image. The first map() steps through the image and removes the first and last element of each value, while the second map() steps through the image again and calculates the average value of the pixels adjacent to the current pixel, rounding it down. At the end it returns a new image with the blur filter applied.
// Esse código é usado para aplicar um filtro blur em uma imagem. O primeiro map() percorre a imagem e remove o primeiro e o último elemento de cada valor, enquanto o segundo map() percorre novamente a imagem e calcula o valor médio dos pixels adjacentes ao pixel atual, arredondando-o para baixo. Ao final, retorna uma nova imagem com o filtro blur aplicado.

const solution = image =>
    image.slice(1, -1).map(val => val.slice(1, -1)).map((val, i) =>
        val.map((_, j) => {
            let total = 0;
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    total += image[i + x][j + y];
                }
            }
            return Math.floor(total / 9);
        })
    );

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
