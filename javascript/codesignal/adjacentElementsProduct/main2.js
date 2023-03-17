// This code takes an array of numbers as input and returns the maximum value of the product of each element in the array and its subsequent element. Here is a step-by-step breakdown of what the code does:

// The input array is sliced starting from the second element (index 1) using the slice method. The slice method returns a shallow copy of the array, starting from the provided index.

// The map method is called on the sliced array to create a new array of products. The callback function of the map method takes in each element x and its index i, multiplies x with its subsequent element in the original array (which is inputArray[i+1]) and returns the product as a new array.

// The spread operator (...) is used to spread the new array of products as individual arguments into the Math.max method. This finds the largest number in the array.

// The largest number, which will be the maximum product of any adjacent elements in the input array, is returned as the final result.

// solution by myjinxin2015
function solution(inputArray) {
    return Math.max(...inputArray.slice(1).map((x, i) => [x * inputArray[i]]));
}

const assert = require('assert');
function testSolution() {
    let inputArray = [3, 6, -2, -5, 7, 3];
    assert.deepStrictEqual(solution(inputArray), 21);
    console.log('Test 1: ', solution(inputArray));

    inputArray = [-1, -2];
    assert.deepStrictEqual(solution(inputArray), 2);
    console.log('Test 2: ', solution(inputArray));

    inputArray = [5, 1, 2, 3, 1, 4];
    assert.deepStrictEqual(solution(inputArray), 6);
    console.log('Test 3: ', solution(inputArray));

    inputArray = [1, 2, 3, 0];
    assert.deepStrictEqual(solution(inputArray), 6);
    console.log('Test 4: ', solution(inputArray));

    inputArray = [9, 5, 10, 2, 24, -1, -48];
    assert.deepStrictEqual(solution(inputArray), 50);
    console.log('Test 5: ', solution(inputArray));

    inputArray = [5, 6, -4, 2, 3, 2, -23];
    assert.deepStrictEqual(solution(inputArray), 30);
    console.log('Test 6: ', solution(inputArray));

    inputArray = [4, 1, 2, 3, 1, 5];
    assert.deepStrictEqual(solution(inputArray), 6);
    console.log('Test 7: ', solution(inputArray));

    inputArray = [-23, 4, -3, 8, -12];
    assert.deepStrictEqual(solution(inputArray), -12);
    console.log('Test 8: ', solution(inputArray));

    inputArray = [1, 0, 1, 0, 1000];
    assert.deepStrictEqual(solution(inputArray), 0);
    console.log('Test 9: ', solution(inputArray));
}

testSolution();
