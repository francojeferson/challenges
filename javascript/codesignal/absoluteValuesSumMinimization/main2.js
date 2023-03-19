// This code defines a JavaScript function solution that takes an array a as an argument. The function returns the middle element of the array a.
// Here is the step-by-step plan to describe what this code does in pseudocode:

// Define a function called solution that takes an array a as an argument.
// Use the Math.ceil() method to get the smallest integer greater than or equal to the result of dividing the length of a by 2.
// Subtract 1 from the result of step 2 to get the index of the middle element in the array a.
// Return the element of a at the index calculated in step 3.

// solution by archimedez
function solution(a) {
    return a[Math.ceil(a.length / 2) - 1];
}

const assert = require('assert');
function testSolution() {
    let a = [2, 4, 7];
    assert.deepStrictEqual(solution(a), 4);
    console.log('Test 1: ', solution(a));

    a = [2, 3];
    assert.deepStrictEqual(solution(a), 2);
    console.log('Test 2: ', solution(a));

    a = [1, 1, 3, 4];
    assert.deepStrictEqual(solution(a), 1);
    console.log('Test 3: ', solution(a));

    a = [23];
    assert.deepStrictEqual(solution(a), 23);
    console.log('Test 4: ', solution(a));

    a = [-10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
    assert.deepStrictEqual(solution(a), 15);
    console.log('Test 5: ', solution(a));

    a = [-4, -1];
    assert.deepStrictEqual(solution(a), -4);
    console.log('Test 6: ', solution(a));

    a = [0, 7, 9];
    assert.deepStrictEqual(solution(a), 7);
    console.log('Test 7: ', solution(a));

    a = [-1000000, -10000, -10000, -1000, -100, -1, 0, 1, 10, 100, 1000, 10000, 100000, 1000000];
    assert.deepStrictEqual(solution(a), 0);
    console.log('Test 8: ', solution(a));

    a = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150];
    assert.deepStrictEqual(solution(a), 65);
    console.log('Test 9: ', solution(a));

    a = [-10, 100, 200, 300, 400, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500];
    assert.deepStrictEqual(solution(a), 500);
    console.log('Test 10: ', solution(a));
}

testSolution();
