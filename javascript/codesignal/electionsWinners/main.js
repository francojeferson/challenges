// This code defines a function named solution that takes in two arguments: an array of numbers votes, and a number k. The function finds the maximum vote count from the votes array, which is stored in the max variable using the Math.max() method. It then initializes a counter variable called count to 0.
// The code then loops through each element of the votes array using a for loop and checks if votes[i] + k is greater than the max variable. If this is true, the count variable is incremented by 1.
// After the loop, if count is equal to 0 and k is also 0, then the function filters the votes array to find if there is only one element that equals the max variable. If this is true, the function returns 1, otherwise it returns 0.
// Otherwise, the function returns the value of the count variable, which represents the number of candidates that can win the election if at most k votes are added to any candidate's votes.

function solution(votes, k) {
    let max = Math.max(...votes);
    let count = 0;
    for (let i = 0; i < votes.length; i++) {
        if (votes[i] + k > max) {
            count++;
        }
    }
    if (count === 0 && k === 0) {
        return votes.filter(v => v === max).length === 1 ? 1 : 0;
    }
    return count;
}

const assert = require('assert');
function testSolution() {
    try {
        let votes = [2, 3, 5, 2];
        let k = 3;
        assert.deepStrictEqual(solution(votes, k), 2);
        console.log('Test 1: ', solution(votes, k));

        votes = [1, 3, 3, 1, 1];
        k = 0;
        assert.deepStrictEqual(solution(votes, k), 0);
        console.log('Test 2: ', solution(votes, k));

        votes = [5, 1, 3, 4, 1];
        k = 0;
        assert.deepStrictEqual(solution(votes, k), 1);
        console.log('Test 3: ', solution(votes, k));

        votes = [1, 1, 1, 1];
        k = 1;
        assert.deepStrictEqual(solution(votes, k), 4);
        console.log('Test 4: ', solution(votes, k));

        votes = [1, 1, 1, 1];
        k = 0;
        assert.deepStrictEqual(solution(votes, k), 0);
        console.log('Test 5: ', solution(votes, k));

        votes = [3, 1, 1, 3, 1];
        k = 2;
        assert.deepStrictEqual(solution(votes, k), 2);
        console.log('Test 6: ', solution(votes, k));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
