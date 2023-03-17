// This function takes an array of numbers called inputArray and calculates the maximum difference between any two adjacent numbers in the array. It initializes a variable called maxDiff to 0 and then loops through each element in the inputArray, using the Math.max function to compare the current value of maxDiff with the absolute difference between the current element and the element immediately following it. The loop stops before reaching the last element of the array to avoid a "undefined" error. Finally, the function returns the largest difference found.

function solution(inputArray) {
    let maxDiff = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        maxDiff = Math.max(maxDiff, Math.abs(inputArray[i] - inputArray[i + 1]));
    }
    return maxDiff;
}

const assert = require('assert');
function testSolution() {
    let inputArray = [2, 4, 1, 0];
    assert.deepStrictEqual(solution(inputArray), 3);
    console.log('Test 1: ', solution(inputArray));

    inputArray = [1, 1, 1, 1];
    assert.deepStrictEqual(solution(inputArray), 0);
    console.log('Test 2: ', solution(inputArray));

    inputArray = [-1, 4, 10, 3, -2];
    assert.deepStrictEqual(solution(inputArray), 7);
    console.log('Test 3: ', solution(inputArray));

    inputArray = [10, 11, 13];
    assert.deepStrictEqual(solution(inputArray), 2);
    console.log('Test 4: ', solution(inputArray));

    inputArray = [-2, -2, -2, -2, -2];
    assert.deepStrictEqual(solution(inputArray), 0);
    console.log('Test 5: ', solution(inputArray));

    inputArray = [-1, 1, -3, -4];
    assert.deepStrictEqual(solution(inputArray), 4);
    console.log('Test 6: ', solution(inputArray));

    inputArray = [-14, 15, -15];
    assert.deepStrictEqual(solution(inputArray), 30);
    console.log('Test 7: ', solution(inputArray));
}

testSolution();
