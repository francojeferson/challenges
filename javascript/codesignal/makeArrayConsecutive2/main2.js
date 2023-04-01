// The solution function takes an array of numbers as input and returns an integer result. The function first uses the Math.max and Math.min methods to find the largest and smallest values in the input array, respectively. The spread operator (...) is used to convert the input array into a list of values that can be passed as arguments to these methods.
// The function then subtracts the smallest value from the largest value and adds 1 to this difference, to get the span of the sequence. Finally, the length of the input sequence is subtracted from this span. This gives the number of missing values in the sequence required for it to form a contiguous range of numbers. The resulting integer is returned as output of the solution function.

// solution by myjinxin2015
function solution(sequence) {
    return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length;
}

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
