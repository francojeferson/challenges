// This code defines an arrow function called solution that takes an array a as its input. The function then uses the reduce method to iterate through the array and apply a function to each element. The function passed to reduce takes three arguments: the previous value (p), the current value (v), and the current index (i). The function adds the current value to either the 0th or 1st index of the accumulator p based on whether the index is even or odd, using the bitwise AND operator &. Finally, the function returns the updated accumulator p, which is an array containing two values. The initial value of the accumulator is [0, 0]. Therefore, the solution function returns an array of two numbers representing the sum of elements with even indices and the sum of elements with odd indices, respectively, in the input array a.

// solution by codeedog
const solution = a => a.reduce((p, v, i) => (p[i & 1] += v, p), [0, 0]);

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
