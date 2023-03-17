// This code defines a function called solution that accepts an array a as an argument. The function does the following:

// It creates a new array called sortedA which is a filtered and sorted version of the original array a. The filtering removes all occurrences of the number -1 from a and the sorting orders the remaining values in ascending order.
// It initializes a variable called sortedAIndex to 0.
// It returns a new array by applying a mapping function to each element of the original array a. If an element in a is equal to -1, it returns -1. Otherwise, it returns the corresponding element of sortedA at the index of sortedAIndex and then increments the sortedAIndex variable by 1. The effect of this mapping is to replace all occurrences of -1 in the original array a with the corresponding element from the sorted array but leaving all other values in their original order.

// Therefore, this function organizes a in non-descending order while still retaining the original positions of all other elements of a.

function solution(a) {
    const sortedA = a.filter(num => num !== -1).sort((a, b) => a - b);
    let sortedAIndex = 0;

    return a.map(num => num === -1 ? num : sortedA[sortedAIndex++]);
}

const assert = require('assert');
function testSolution() {
    let a = [-1, 150, 190, 170, -1, -1, 160, 180];
    assert.deepStrictEqual(solution(a), [-1, 150, 160, 170, -1, -1, 180, 190]);
    console.log('Test 1: ', solution(a));

    a = [-1, -1, -1, -1, -1];
    assert.deepStrictEqual(solution(a), [-1, -1, -1, -1, -1]);
    console.log('Test 2: ', solution(a));

    a = [-1];
    assert.deepStrictEqual(solution(a), [-1]);
    console.log('Test 3: ', solution(a));

    a = [4, 2, 9, 11, 2, 16];
    assert.deepStrictEqual(solution(a), [2, 2, 4, 9, 11, 16]);
    console.log('Test 4: ', solution(a));

    a = [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1];
    assert.deepStrictEqual(solution(a), [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]);
    console.log('Test 5: ', solution(a));

    a = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3];
    assert.deepStrictEqual(solution(a), [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]);
    console.log('Test 6: ', solution(a));
}

testSolution();
