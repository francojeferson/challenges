// This is a function called solution() that takes in five parameters: value1, weight1, value2, weight2, and maxW. The function then calculates the maximum value that can be carried given a maximum weight limit of maxW, based on the values and weights of two different items (represented by value1 and weight1, and value2 and weight2).
// Here is the step-by-step breakdown of the logic in this function:

// If the combined weight of both items is less than or equal to maxW, then both items can be carried, so the function returns the combined value of both items.
// If the weight of the first item is less than or equal to maxW, but the weight of the second item is greater than maxW, then only the first item can be carried, and the function returns the value of the first item.
// If the weight of the second item is less than or equal to maxW, but the weight of the first item is greater than maxW, then only the second item can be carried, and the function returns the value of the second item.
// If both items weigh more than maxW, then neither item can be carried, and the function returns 0.
// If both items weigh less than maxW, but the combined weight is greater than maxW, then the function returns the value of the item that has the higher value between the two.

function solution(value1, weight1, value2, weight2, maxW) {
    if (weight1 + weight2 <= maxW) {
        return value1 + value2;
    } else if (weight1 <= maxW && weight2 > maxW) {
        return value1;
    } else if (weight2 <= maxW && weight1 > maxW) {
        return value2;
    } else if (weight1 > maxW && weight2 > maxW) {
        return 0;
    } else {
        return value2 > value1 ? value2 : value1;
    }
}

const assert = require('assert');
function testSolution() {
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
}

testSolution();
