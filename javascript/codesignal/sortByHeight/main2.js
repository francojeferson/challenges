// This is a JavaScript function named solution that takes an array a as input. This function does the following:

// It first initializes a new array s which is a filtered and sorted version of the input array a.
// The filtering step removes all elements in a that are not greater than zero.
// The sorting step sorts the filtered array in ascending order.
// It then initializes an index variable i to 0.
// The function maps over the input array a, and for each element p in a, it does the following:
// If p is not equal to -1, it returns the next element of array s using the index i, and increments i.
// If p is equal to -1, it returns -1.
// Finally, the function returns a new array that is the result of step 5 and 6.

// The purpose of this function appears to be to return a new array where all non-negative numbers of the input array a are sorted in ascending order and placed in the same position as they were in a. Any -1 values in a are replaced with -1 in the resulting array.

function solution(a) {
    let s = a.filter(h => h > 0).sort((a, b) => a - b);
    let i = 0;

    return a.map(p => {
        if (p !== -1) {
            return s[i++];
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
