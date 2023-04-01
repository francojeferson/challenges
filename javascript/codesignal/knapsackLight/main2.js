// This code defines a function called solution that takes in five parameters: value1, weight1, value2, weight2, and maxW.
// The ultimate goal of this function is to determine the maximum possible value that can be carried by a knapsack with a maximum weight capacity of maxW.
// The function does this by evaluating three potential scenarios:

// If the weight of item 1 (weight1) is less than or equal to the maximum weight capacity (maxW), the value of item 1 (value1) is considered.
// If the weight of item 2 (weight2) is less than or equal to the maximum weight capacity (maxW), the value of item 2 (value2) is considered.
// If the combined weight of items 1 and 2 (weight1 + weight2) is less than or equal to the maximum weight capacity (maxW), the combined value of both items (value1 + value2) is considered.

// Finally, the Math.max function is used to determine the maximum possible value based on these three scenarios. The maximum value is then returned by the function.

// solution by jakzo
function solution(value1, weight1, value2, weight2, maxW) {
    return Math.max(
        maxW >= weight1 && value1,
        maxW >= weight2 && value2,
        maxW >= weight1 + weight2 && value1 + value2
    );
}

const assert = require('assert');
function testSolution() {
    try {
        let value1 = 10;
        let weight1 = 5;
        let value2 = 6;
        let weight2 = 4;
        let maxW = 8;
        assert.deepStrictEqual(solution(value1, weight1, value2, weight2, maxW), 10);
        console.log('Test 1: ', solution(value1, weight1, value2, weight2, maxW));

        value1 = 10;
        weight1 = 5;
        value2 = 6;
        weight2 = 4;
        maxW = 9;
        assert.deepStrictEqual(solution(value1, weight1, value2, weight2, maxW), 16);
        console.log('Test 2: ', solution(value1, weight1, value2, weight2, maxW));

        value1 = 5;
        weight1 = 3;
        value2 = 7;
        weight2 = 4;
        maxW = 6;
        assert.deepStrictEqual(solution(value1, weight1, value2, weight2, maxW), 7);
        console.log('Test 3: ', solution(value1, weight1, value2, weight2, maxW));

        value1 = 10;
        weight1 = 2;
        value2 = 11;
        weight2 = 3;
        maxW = 1;
        assert.deepStrictEqual(solution(value1, weight1, value2, weight2, maxW), 0);
        console.log('Test 4: ', solution(value1, weight1, value2, weight2, maxW));

        value1 = 15;
        weight1 = 2;
        value2 = 20;
        weight2 = 3;
        maxW = 2;
        assert.deepStrictEqual(solution(value1, weight1, value2, weight2, maxW), 15);
        console.log('Test 5: ', solution(value1, weight1, value2, weight2, maxW));

        value1 = 2;
        weight1 = 5;
        value2 = 3;
        weight2 = 4;
        maxW = 5;
        assert.deepStrictEqual(solution(value1, weight1, value2, weight2, maxW), 3);
        console.log('Test 6: ', solution(value1, weight1, value2, weight2, maxW));

        value1 = 4;
        weight1 = 3;
        value2 = 3;
        weight2 = 4;
        maxW = 4;
        assert.deepStrictEqual(solution(value1, weight1, value2, weight2, maxW), 4);
        console.log('Test 7: ', solution(value1, weight1, value2, weight2, maxW));

        value1 = 3;
        weight1 = 5;
        value2 = 3;
        weight2 = 8;
        maxW = 10;
        assert.deepStrictEqual(solution(value1, weight1, value2, weight2, maxW), 3);
        console.log('Test 8: ', solution(value1, weight1, value2, weight2, maxW));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
