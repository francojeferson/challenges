// This code defines a function called "solution" that takes in one argument called "product". The function returns either a positive integer, a -1, or NaN (Not-a-Number).
// The function first checks if the argument "product" is equal to zero - if so, it returns 10. If the argument is equal to one, it returns 1.
// If the argument is not zero or one, the function sets an empty string called "result". It then executes a for loop with a starting point of the integer 9 and runs as long as the variable "i" is greater than 1. Inside the loop, there is a while loop that tests if the argument "product" is exactly divisible with "i". If so, the code concatenates "i" with the "result" string, and it divides the "product" by "i".
// Lastly, the function checks if "product" is equal to 1. If it is, the function converts the "result" string from a string to an integer using the parseInt() method then returns it. Otherwise, "-1" is returned. If the "result" string cannot be converted to an integer or is empty, then NaN is returned.

function solution(product) {
    if (product === 0) {
        return 10;
    }
    if (product === 1) {
        return 1;
    }
    let result = '';
    for (let i = 9; i > 1; i--) {
        while (product % i === 0) {
            result = i + result;
            product /= i;
        }
    }
    return product === 1 ? parseInt(result) : -1;
}

const assert = require('assert');
function testSolution() {
    let product = 12;
    assert.deepStrictEqual(solution(product), 26);
    console.log('Test 1: ', solution(product));

    product = 19;
    assert.deepStrictEqual(solution(product), -1);
    console.log('Test 2: ', solution(product));

    product = 450;
    assert.deepStrictEqual(solution(product), 2559);
    console.log('Test 3: ', solution(product));

    product = 0;
    assert.deepStrictEqual(solution(product), 10);
    console.log('Test 4: ', solution(product));

    product = 13;
    assert.deepStrictEqual(solution(product), -1);
    console.log('Test 5: ', solution(product));

    product = 1;
    assert.deepStrictEqual(solution(product), 1);
    console.log('Test 6: ', solution(product));

    product = 243;
    assert.deepStrictEqual(solution(product), 399);
    console.log('Test 7: ', solution(product));

    product = 576;
    assert.deepStrictEqual(solution(product), 889);
    console.log('Test 8: ', solution(product));

    product = 360;
    assert.deepStrictEqual(solution(product), 589);
    console.log('Test 9: ', solution(product));
}

testSolution();
