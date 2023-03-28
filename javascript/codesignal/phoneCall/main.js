// This code defines a function called solution which takes four arguments: min1, min2_10, min11, and s.
// The function calculates the minimum number of minutes it takes to complete a task, given the following conditions:

// It takes min1 minutes to complete the first subtask.
// It takes min2_10 minutes to complete the second to tenth subtasks.
// It takes min11 minutes to complete the eleventh subtask and beyond.
// The total time limit to complete all the subtasks is s.

// The function first checks if the total time limit s is greater than or equal to the time limit of the first subtask min1. If it is, then it subtracts the time taken by the first subtask from the total time limit and increments the number of minutes by one.
// If the total time limit is less than the time limit of the first subtask, then the function returns the number of minutes, which is currently zero.
// Next, the function checks if the total time limit s is greater than or equal to the time taken by the next 9 subtasks, which is min2_10 multiplied by 9. If it is, then it subtracts the time taken by those subtasks from the total time limit s and increments the number of minutes by 9.
// If the total time limit is less than the time taken by the first 10 subtasks, then the function calculates the maximum number of subtasks that could be completed based on the remaining time s and adds that number to the number of minutes.
// Then, it calculates the maximum number of subtasks that could be completed based on the remaining time s for the remaining subtasks (i.e more than 10 subtasks) and adds that number to the number of minutes.
// Lastly, the function returns the total number of minutes calculated.
// In summary, the solution function calculates the minimum number of minutes that it would take to complete all subtasks given specific time limits for each subtask as well as a total time limit to complete all subtasks.

function solution(min1, min2_10, min11, s) {
    let minutes = 0;
    if (s >= min1) {
        s -= min1;
        minutes++;
    } else {
        return minutes;
    }
    if (s >= min2_10 * 9) {
        s -= min2_10 * 9;
        minutes += 9;
    } else {
        minutes += Math.floor(s / min2_10);
        return minutes;
    }
    minutes += Math.floor(s / min11);
    return minutes;
}

const assert = require('assert');
function testSolution() {
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
}

testSolution();
