// This code takes an array of numbers as an argument and returns the largest product of any two adjacent numbers in the array. It uses the spread operator to spread out the elements of the array, then uses .map() to multiply each element by its adjacent element. Finally, it uses Math.max() to return the largest product.

function solution(inputArray) {
    return Math.max(...inputArray.slice(0, -1).map((n, i) => n * inputArray[i + 1]));
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
