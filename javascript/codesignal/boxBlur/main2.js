// This code defines a function named solution that takes an image argument as input, which is expected to be a 2D array of numbers, where each number is a pixel value of an image. The function manipulates the input array and returns a new array that represents a blurred version of the image.
// The function first creates a new array B that is a sub-array of the image array, where the first and last rows and columns are removed. This is done because the function does not perform the blurring operation for pixels on the image borders.
// Then, the function applies a nested map operation on the B array, where each pixel value is replaced with the average value of the nine pixels in a 3x3 grid centered around the pixel. This is done by looping over a 3x3 sub-grid for each pixel of the B array and accumulating the sum of pixel values in the sum variable. Finally, the average value is calculated by dividing the sum by 9 and rounding down the result, which is then used as the new pixel value.
// The blurred image is returned as a new 2D array of numbers that has the same dimensions as the B array.

// solution by jraghon
const solution = image => {
    let B = image.slice(1, -1).map(e => e.slice(1, -1));

    return B.map((row, i) =>
        row.map((elem, j) => {
            var sum = 0;
            for (var x = 0; x < 3; ++x)
                for (var y = 0; y < 3; ++y)
                    sum += image[i + x][j + y];
            return sum / 9 | 0;
        })
    );
};

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
