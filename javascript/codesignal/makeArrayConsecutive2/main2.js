// This code takes in an array of numbers (sequence) and returns the difference between the maximum and minimum values in the array, plus one, minus the length of the array. This can be used to find the number of unique elements in an array.

function solution(sequence) {
    return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length;
}

const assert = require('assert');
function testSolution() {
    let statues = [6, 2, 3, 8];
    assert.deepStrictEqual(solution(statues), 3);
    console.log('Test 1: ', solution(statues));

    statues = [0, 3];
    assert.deepStrictEqual(solution(statues), 2);
    console.log('Test 2: ', solution(statues));

    statues = [5, 4, 6];
    assert.deepStrictEqual(solution(statues), 0);
    console.log('Test 3: ', solution(statues));

    statues = [6, 3];
    assert.deepStrictEqual(solution(statues), 2);
    console.log('Test 4: ', solution(statues));

    statues = [1];
    assert.deepStrictEqual(solution(statues), 0);
    console.log('Test 5: ', solution(statues));
}

testSolution();
