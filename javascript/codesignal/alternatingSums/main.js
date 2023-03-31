// This code defines a function called solution that takes an array a as its argument. The function initializes two variables, even and odd, to zero. The function then iterates over each element of the array using a for...of loop and determines whether the index of the current element is even or odd. If it is even, the value of the current element is added to the even variable. If it is odd, the value of the current element is added to the odd variable. Finally, the function returns an array containing the sum of the even-indexed elements and the sum of the odd-indexed elements.

function solution(a) {
    let even = 0;
    let odd = 0;
    for (const val of a.entries()) {
        if (val[0] % 2 === 0) {
            even += val[1];
        } else {
            odd += val[1];
        }
    }
    return [even, odd];
}

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
