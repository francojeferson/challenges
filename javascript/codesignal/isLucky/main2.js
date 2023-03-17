// The solution function takes in one argument, an integer n.
// The first line initializes a variable count to zero.
// n = String(n).split('').map(t => { return parseInt(t); }); This line converts the integer n to a string, splits the string into an array of individual characters, and then maps it to an array of integers.
// The next line uses the forEach method to loop through the array of integers. If the index of the current element is less than half the length of the array, it adds the element to the count variable. Otherwise, it subtracts the element from count.
// The function returns true if the final count variable is equal to zero, and false if it is not.
// Essentially, this function checks if the sum of the first half of the digits in the number n equals the sum of the second half of the digits in the number n.

// solution by evgenia_y
function solution(n) {
    let count = 0;
    n = String(n).split('').map(t => { return parseInt(t); });
    n.forEach((el, i) => { (i < n.length / 2) ? count += el : count -= el; });
    return count == 0;
}

const assert = require('assert');
function testSolution() {
    let n = 1230;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 1: ', solution(n));

    n = 239017;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 2: ', solution(n));

    n = 134008;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 3: ', solution(n));

    n = 10;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 4: ', false);

    n = 11;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 5: ', solution(n));

    n = 1010;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 6: ', solution(n));

    n = 261534;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 7: ', solution(n));

    n = 100000;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 8: ', solution(n));

    n = 999999;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 9: ', solution(n));

    n = 123321;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 10: ', solution(n));
}

testSolution();
