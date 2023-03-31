// This code defines a function called solution that takes an array of numbers as its input, and then returns the maximum value obtained by multiplying each number in the array by the next number in the array, and identifying the maximum value in the resulting array of products.
// Here is a step-by-step breakdown of the code:

// inputArray.slice(0, -1) selects all the items in the array except for the last one.
// .map((n, i) => n * inputArray[i + 1]) applies a function to each item n in the array, where the function multiplies it by the next item in the array, which is inputArray[i + 1].
// ... is the spread operator that unpacks the array of products into the Math.max() function.
// Math.max() identifies the largest number in the array of products, and returns it.

function solution(inputArray) {
    return Math.max(...inputArray.slice(0, -1).map((n, i) => n * inputArray[i + 1]));
}

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
