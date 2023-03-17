// This code defines a function called "solution" that takes an array as its parameter. The function then declares two variables called "even" and "odd" and assigns them both an initial value of 0.
// Next, the function uses a for loop to iterate over the entire length of the input array.
// During each iteration of the loop, the code checks if the index of the current element is even or odd. If it's even, the value of the current element is added to the "even" variable. If it's odd, the value of the current element is added to the "odd" variable.
// Finally, the function returns an array containing the values of the "even" and "odd" variables.
// In essence, this code adds up all the numbers located in even and odd indices of an array and returns an array containing the sum of even-index numbers and the sum of odd-index numbers, respectively.

function solution(a) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            even += a[i];
        } else {
            odd += a[i];
        }
    }
    return [even, odd];
}

const assert = require('assert');
function testSolution() {
    let a = [50, 60, 60, 45, 70];
    assert.deepStrictEqual(solution(a), [180, 105]);
    console.log('Test 1: ', solution(a));

    a = [100, 50];
    assert.deepStrictEqual(solution(a), [100, 50]);
    console.log('Test 2: ', solution(a));

    a = [80];
    assert.deepStrictEqual(solution(a), [80, 0]);
    console.log('Test 3: ', solution(a));

    a = [100, 50, 50, 100];
    assert.deepStrictEqual(solution(a), [150, 150]);
    console.log('Test 4: ', solution(a));

    a = [100, 51, 50, 100];
    assert.deepStrictEqual(solution(a), [150, 151]);
    console.log('Test 5: ', solution(a));
}

testSolution();
