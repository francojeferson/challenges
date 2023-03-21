// This code defines a function solution that takes a positive integer product as its input. The function returns either the largest possible number (in string format) consisting of digits between 1 and 9 that will multiply together to make product, or -1 if no such number exists.
// The function first checks if product is less than 10; if so, and product is greater than 0, the function returns product. If product is 0, the function returns 10 (since multiplying by 0 would always give a product of 0).
// Next, the function loops through the possible factors of product in decreasing order, starting with 9 and ending with 2. For each possible factor, if it divides product evenly, the factor is removed from product by dividing product by the factor. The factor is then added to the beginning of a string res. This ensures that the digits are in decreasing order (i.e., the largest digits come first) in the final answer.
// After all possible factors have been checked, the function checks whether there is any leftover value in product. If product is not equal to 1, then there is no way to form a string of digits between 1 and 9 that will multiply together to form product. In this case, the function returns -1. Otherwise, the function returns the string res.

// solution by Olexa
const solution = product => {
    let res = ``;
    if (product < 10) return product > 0 ? product : 10;
    for (let i = 9; i > 1; i--) {
        while (!(product % i)) {
            product /= i;
            res = i + res;
        }
    }
    return product - 1 ? -1 : +res;
};

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
