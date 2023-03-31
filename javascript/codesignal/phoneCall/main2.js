// The function solution takes in four arguments: min1, min2_10, min11, and s. It calculates the maximum number of tasks that can be completed in s seconds given the time required for completing the first task (min1), time required for completing tasks 2 to 10 (min2_10), and time required for completing tasks after the 10th task (min11).
// The function initializes a variable result to 0 and another variable i to 0. It then starts a while loop and increments i for every iteration. In each iteration, it adds min1 to result if it's the first task, min2_10 if it's task 2 to 10 and min11 if it's more than the 10th task.
// The loop continues until the result is greater than s. The value of i returned by the function is i-1, since i is incremented once more after the last task has been completed.
// Therefore, the function calculates the maximum number of tasks that can be completed in s seconds given the durations of the tasks provided as arguments.

// solution by eric_noh
function solution(min1, min2_10, min11, s) {
    let result = 0;
    let i = 0;

    while (result <= s) {
        i++;
        if (i == 1) result += min1;
        if (i >= 2 && i <= 10) result += min2_10;
        if (i > 10) result += min11;
    }

    return --i;
}

const assert = require('assert');
function testSolution() {
    try {
        let min1 = 3;
        let min2_10 = 1;
        let min11 = 2;
        let s = 20;
        assert.deepStrictEqual(solution(min1, min2_10, min11, s), 14);
        console.log('Test 1: ', solution(min1, min2_10, min11, s));

        min1 = 2;
        min2_10 = 2;
        min11 = 1;
        s = 2;
        assert.deepStrictEqual(solution(min1, min2_10, min11, s), 1);
        console.log('Test 2: ', solution(min1, min2_10, min11, s));

        min1 = 10;
        min2_10 = 1;
        min11 = 2;
        s = 22;
        assert.deepStrictEqual(solution(min1, min2_10, min11, s), 11);
        console.log('Test 3: ', solution(min1, min2_10, min11, s));

        min1 = 2;
        min2_10 = 2;
        min11 = 1;
        s = 24;
        assert.deepStrictEqual(solution(min1, min2_10, min11, s), 14);
        console.log('Test 4: ', solution(min1, min2_10, min11, s));

        min1 = 1;
        min2_10 = 2;
        min11 = 1;
        s = 6;
        assert.deepStrictEqual(solution(min1, min2_10, min11, s), 3);
        console.log('Test 5: ', solution(min1, min2_10, min11, s));

        min1 = 10;
        min2_10 = 10;
        min11 = 10;
        s = 8;
        assert.deepStrictEqual(solution(min1, min2_10, min11, s), 0);
        console.log('Test 6: ', solution(min1, min2_10, min11, s));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
