// The given code is a function called solution. It takes in a 2D square matrix called an image, performs a transformation on it, and returns the transformed image as a new 2D square matrix. The transformation is a type of image filtering called a box blur.
// Here is a step-by-step description of the algorithm used to transform the input image:

// Initialize an empty array result to store the transformed image.
// Loop through the input image image starting from the first row (i=0) and first column (j=0) and going up to second-to-last row and second-to-last column (i < image.length-2 and j < image[i].length-2).
// For each starting position (i,j), create a 3x3 "box" by iterating over the next 3 rows and 3 columns after the starting row and column, and calculate the sum of all the values inside the 3x3 box.
// Divide the sum by 9, to get an average, push this average value to the current row (row).
// When you complete the current row (when j = image[i].length - 3), push the row onto the result array.
// Once all rows are complete (when i = image.length - 3), the transformation is complete. result is returned.

function solution(image) {
    let result = [];
    for (let i = 0; i < image.length - 2; i++) {
        let row = [];
        for (let j = 0; j < image[i].length - 2; j++) {
            let sum = 0;
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    sum += image[i + k][j + l];
                }
            }
            row.push(Math.floor(sum / 9));
        }
        result.push(row);
    }
    return result;
}

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
