// This function takes in a number n as input, and converts it to a string using the toString() method. The resulting string is then split into an array of characters using the split('') method. The reduce() method is then called on this array, which iteratively reduces the array to a single value, by applying a function to each element of the array.
// In this case, the function being applied to each element is (a, b) => parseInt(a) + parseInt(b), which adds together two elements of the array, after converting them to integers using the parseInt() function.
// Finally, the result of this reduction is returned as the output of the function. The effect of this function is therefore to compute the sum of the digits of the input number n.

function solution(n) {
    return n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b));
}

const assert = require('assert');
function testSolution() {
    let n = 29;
    assert.deepStrictEqual(solution(n), 11);
    console.log('Test 1: ', solution(n));

    n = 48;
    assert.deepStrictEqual(solution(n), 12);
    console.log('Test 2: ', solution(n));

    n = 10;
    assert.deepStrictEqual(solution(n), 1);
    console.log('Test 3: ', solution(n));

    n = 25;
    assert.deepStrictEqual(solution(n), 7);
    console.log('Test 4: ', solution(n));

    n = 52;
    assert.deepStrictEqual(solution(n), 7);
    console.log('Test 5: ', solution(n));

    n = 99;
    assert.deepStrictEqual(solution(n), 18);
    console.log('Test 6: ', solution(n));

    n = 44;
    assert.deepStrictEqual(solution(n), 8);
    console.log('Test 7: ', solution(n));

    n = 50;
    assert.deepStrictEqual(solution(n), 5);
    console.log('Test 8: ', solution(n));

    n = 39;
    assert.deepStrictEqual(solution(n), 12);
    console.log('Test 9: ', solution(n));

    n = 26;
    assert.deepStrictEqual(solution(n), 8);
    console.log('Test 10: ', solution(n));
}

testSolution();
