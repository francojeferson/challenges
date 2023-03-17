// The function solution takes an array a as a parameter and performs the following actions:

// Filters out all the elements that are less than or equal to zero and returns a new sorted array s.
// Loops through each element in the array a.
// If the current element is not equal to -1, then it means we need to replace this value with the next smallest positive number from the sorted array s, which we achieve using the shift function to remove and retrieve the element at the beginning of the array.
// If the current element is equal to -1, then we need to simply return -1.
// Returns a new array with the above modifications done, but the original values of -1 are still present.

// Essentially, the function takes an array with both positive and negative numbers, sorts the positive numbers and replaces all non-negative numbers in the original array with the next smallest positive number from the sorted array. If an element in the original array is equal to -1, then it stays as is in the modified array.

// solution by haynar
function solution(a) {
    let s = a.filter(h => h > 0).sort((a, b) => a - b);
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }

        return -1;
    });
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
