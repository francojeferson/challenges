// This code takes an array of numbers as an argument (inputArray) and returns the maximum product of two adjacent elements in the array. It does this by slicing off the first element of the array, mapping over the remaining elements, and multiplying each element by its corresponding element in the original array. The spread operator (...) is then used to spread out the mapped values into individual arguments for Math.max(), which returns the maximum value.

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
