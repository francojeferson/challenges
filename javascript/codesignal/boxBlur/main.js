// This is a JavaScript function called solution, which accepts a 2D array (image) as its argument. The function first initializes an empty array called result.
// Then it loops through the rows of the image array with a for loop, starting from the first row (i = 0) and stopping at the second last row (i < image.length - 2).
// Within each row i, the function then loops through the columns of that row with another for loop, starting from the first column (j = 0) and stopping at the second last column (j < image[i].length - 2).
// Within each row i and column j, the function calculates the "average" value of the 3x3 square of pixels around the current pixel. To do this, it loops through the 3 rows of pixels surrounding the current pixel with another for loop (for (let k = 0; k < 3; k++)) and adds up the values of the current column j and the two adjacent columns j+1 and j+2 for each of those 3 rows of pixels.
// After calculating this sum, it then divides it by 9 (since there are 9 pixels in the 3x3 square) and rounds down to the nearest integer using Math.floor(). It then adds this "average" value to a new array called row.
// Once all the columns in a row i have been looped through, the row array is added to the result array, which already contains the previous rows.
// Finally, once all the rows in the image array have been processed, the function returns the result array containing the "averaged" values of the original image.

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
