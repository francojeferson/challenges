// This function takes two parameters: an array of elements called inputArray, and an integer called k.
// The function then uses the filter() method on inputArray to iterate through each element of the array, and return a new array of elements that meet a certain condition:
// The condition is that the index of each element in the original inputArray plus one ((index + 1)) must not be divisible by k.
// In other words, the code filters out every element in the original array whose index plus one is a multiple of k, essentially removing every kth element from the array.
// The new array, consisting of all the elements that did not get filtered out, is returned as the output of the function.

function solution(inputArray, k) {
    return inputArray.filter((element, index) => {
        return (index + 1) % k !== 0;
    });
}

const assert = require('assert');
function testSolution() {
    let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let k = 3;
    assert.deepStrictEqual(solution(inputArray, k), [1, 2, 4, 5, 7, 8, 10]);
    console.log('Test 1: ', solution(inputArray, k));

    inputArray = [1, 1, 1, 1, 1];
    k = 1;
    assert.deepStrictEqual(solution(inputArray, k), []);
    console.log('Test 2: ', solution(inputArray, k));

    inputArray = [1, 2, 1, 2, 1, 2, 1, 2];
    k = 2;
    assert.deepStrictEqual(solution(inputArray, k), [1, 1, 1, 1]);
    console.log('Test 3: ', solution(inputArray, k));

    inputArray = [1, 2, 1, 2, 1, 2, 1, 2];
    k = 10;
    assert.deepStrictEqual(solution(inputArray, k), [1, 2, 1, 2, 1, 2, 1, 2]);
    console.log('Test 4: ', solution(inputArray, k));

    inputArray = [2, 4, 6, 8, 10];
    k = 2;
    assert.deepStrictEqual(solution(inputArray, k), [2, 6, 10]);
    console.log('Test 5: ', solution(inputArray, k));
}

testSolution();
