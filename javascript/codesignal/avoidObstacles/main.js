// This code defines a function called solution which takes an array as its input.
// The function then enters a for loop which initializes a variable i at 1 and runs indefinitely without a defined end point.
// Within the for loop, there is an if statement that checks whether every element in the input array is not divisible by i using the modulo operator (%).
// If every element in the array is not divisible by i, the function returns the current value of i.
// If any element in the array is divisible by i, the loop continues to the next iteration and increments i by 1.
// The function will continue in this manner until it finds the smallest positive integer that is not a multiple of any element in the input array.

function solution(inputArray) {
    for (let i = 1; ; i++) {
        if (inputArray.every(element => element % i !== 0)) {
            return i;
        }
    }
}

const assert = require('assert');
function testSolution() {
    try {
        let inputArray = [5, 3, 6, 7, 9];
        assert.deepStrictEqual(solution(inputArray), 4);
        console.log('Test 1: ', solution(inputArray));

        inputArray = [2, 3];
        assert.deepStrictEqual(solution(inputArray), 4);
        console.log('Test 2: ', solution(inputArray));

        inputArray = [1, 4, 10, 6, 2];
        assert.deepStrictEqual(solution(inputArray), 7);
        console.log('Test 3: ', solution(inputArray));

        inputArray = [1000, 999];
        assert.deepStrictEqual(solution(inputArray), 6);
        console.log('Test 4: ', solution(inputArray));

        inputArray = [19, 32, 11, 23];
        assert.deepStrictEqual(solution(inputArray), 3);
        console.log('Test 5: ', solution(inputArray));

        inputArray = [5, 8, 9, 13, 14];
        assert.deepStrictEqual(solution(inputArray), 6);
        console.log('Test 6: ', solution(inputArray));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
