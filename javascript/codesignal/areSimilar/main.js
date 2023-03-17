// This is a JavaScript function named solution that takes in two array parameters, a and b. Here's a step-by-step explanation of what the code does:

// It checks if the concatenated string of array a is equal to the concatenated string of array b. If they are equal, it returns true.
// If the arrays are not equal, it initializes two empty arrays array1 and array2.
// It loops through each item in the arrays using a for loop, comparing each item at the same index in arrays a and b.
// If the items are not equal, it pushes the item in a to array1 and the item in b to array2.
// After the loop has finished, it returns a boolean indicating whether the concatenated string of array1 is equal to the concatenated string of array2 in reverse order.

// Essentially, the function is checking if two arrays are equal after any items that are in different places (i.e., with different indexes) have been removed.

function solution(a, b) {
    if (a.join('') === b.join('')) return true;
    let array1 = [];
    let array2 = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            array1.push(a[i]);
            array2.push(b[i]);
        }
    }

    return array1.toString() === array2.reverse().toString();
}

const assert = require('assert');
function testSolution() {
    let a = [1, 2, 3];
    let b = [1, 2, 3];
    assert.deepStrictEqual(solution(a, b), true);
    console.log('Test 1: ', solution(a, b));

    a = [1, 2, 3];
    b = [2, 1, 3];
    assert.deepStrictEqual(solution(a, b), true);
    console.log('Test 2: ', solution(a, b));

    a = [1, 2, 2];
    b = [2, 1, 1];
    assert.deepStrictEqual(solution(a, b), false);
    console.log('Test 3: ', solution(a, b));

    a = [1, 2, 1, 2];
    b = [2, 2, 1, 1];
    assert.deepStrictEqual(solution(a, b), true);
    console.log('Test 4: ', solution(a, b));

    a = [1, 2, 1, 2, 2, 1];
    b = [2, 2, 1, 1, 2, 1];
    assert.deepStrictEqual(solution(a, b), true);
    console.log('Test 5: ', solution(a, b));

    a = [1, 1, 4];
    b = [1, 2, 3];
    assert.deepStrictEqual(solution(a, b), false);
    console.log('Test 6: ', solution(a, b));

    a = [1, 2, 3];
    b = [1, 10, 2];
    assert.deepStrictEqual(solution(a, b), false);
    console.log('Test 7: ', solution(a, b));

    a = [2, 3, 1];
    b = [1, 3, 2];
    assert.deepStrictEqual(solution(a, b), true);
    console.log('Test 8: ', solution(a, b));

    a = [2, 3, 9];
    b = [10, 3, 2];
    assert.deepStrictEqual(solution(a, b), false);
    console.log('Test 9: ', solution(a, b));

    a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
    b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];
    assert.deepStrictEqual(solution(a, b), false);
    console.log('Test 10: ', solution(a, b));
}

testSolution();
