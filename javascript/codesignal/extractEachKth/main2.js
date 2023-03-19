// This function takes in an array inputArray of numbers, and an integer k. It creates an empty array result and a counter variable initialized to 0. The function then iterates over each number in inputArray using a for...of loop, incrementing the counter variable for each iteration. If the counter is not equal to k, which means the current element is not the kth element, the number is added to the result array using the push() method. If counter is equal to k, the result array is not updated and the counter is reset to 0. Finally, the result array is returned. The purpose of the function is to remove every kth element from the inputArray.

// solution by luis_miguel
function solution(inputArray, k) {
    let result = [];
    let counter = 0;

    for (let number of inputArray) {
        counter++;

        if (counter !== k)
            result.push(number);
        else
            counter = 0;
    }

    return result;
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
