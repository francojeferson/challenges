// The code defines a function called solution which takes an array a as its parameter. The function initializes two variables: evenSum and oddSum, both starting with 0. The function then loops over every element in the input array a using the forEach() method. For each iteration, it checks if the current element's index is even or odd, sums up the elements separately for the odd and even indices, and stores the results in the evenSum or oddSum variables. Finally, the function returns an array containing the evenSum and oddSum.

const solution = (a) => {
    let evenSum = 0;
    let oddSum = 0;

    a.forEach((num, index) => {
        if (index % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    });

    return [evenSum, oddSum];
};

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
