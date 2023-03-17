// This code defines a function called solution that takes an array a as its input. The function performs the following steps:

// Create a new array called sortedA by cloning the input array a and sorting it in ascending order. Any elements with a value of -1 are removed from the sorted array using the filter method.

// Declare a variable sortedAIndex and initialize it to 0.

// Loop through the input array a.

// If the current element of a is equal to -1, skip it and continue to the next element.

// Otherwise, replace the current element of a with the value at the corresponding index of the sortedA array, starting with the first index.

// After all elements of a have been processed, return the modified a array with the -1 values replaced by sorted values.

// In summary, this function takes an array, sorts it and returns the sorted array keeping the original positions of elements in the input array except -1 values.

function solution(a) {
    const sortedA = [...a].sort((a, b) => a - b).filter((num) => num !== -1);
    let sortedAIndex = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) continue;
        else {
            a[i] = sortedA[sortedAIndex++];
        }
    }
    return a;
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
