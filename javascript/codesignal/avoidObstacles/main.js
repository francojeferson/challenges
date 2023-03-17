// This code defines a function called solution that takes an array of integers called inputArray as an argument. It then initializes a variable called i to the value of 1.
// The function then enters a while loop that will iterate indefinitely until a return statement inside the loop is executed.
// Within the while loop, the function checks whether every element in the inputArray is not divisible by i. The every function returns a boolean value indicating whether the function inside the parentheses returns true for every element in the inputArray. The function inside the parentheses uses an arrow function to determine whether each element in the inputArray is not divisible by i.
// If every element in the inputArray is not divisible by i, then the function returns the value of i and exits the loop. If not, then the variable i is incremented by 1 and the loop starts again, checking whether every element in the inputArray is not divisible by the new value of i.
// In summary, the function solution finds the smallest positive integer that is not divisible by any element in inputArray.

function solution(inputArray) {
    let i = 1;
    while (true) {
        if (inputArray.every(element => element % i !== 0)) {
            return i;
        }
        i++;
    }
}

const assert = require('assert');
function testSolution() {
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
}

testSolution();
