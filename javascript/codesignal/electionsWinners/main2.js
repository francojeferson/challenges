// This code defines a function called solution that takes in two arguments: an array of integers called votes and an integer called k. The function determines if a candidate can win an election by comparing their vote count to the vote count of the candidate with the highest number of votes. If the candidate with the highest number of votes and the candidate in question have the same number of votes and k is equal to 0, then that candidate is declared the winner. Otherwise, if the candidate in question has a vote count that is k or more votes greater than the candidate with the highest number of votes, that candidate is also declared the winner.
// Specifically, the code establishes two variables: max, which is the maximum number of votes found in the votes array, and count, which is an accumulator for the upcoming loops.
// If k is equal to 0, the code loops through the votes list and increments the count variable for every vote that equals max. If the resulting count is equal to 1, the function returns 1, signifying that the candidate is the winner. If count is any other non-zero number, the function returns 0, signifying that the candidate did not win the election.
// If k is not equal to 0, the code loops through the votes array again and increments count for every vote that is greater than or equal to the difference between max and k. After the loop is complete, the function returns count, which represents the number of votes in the votes array that were greater than or equal to the threshold required to win the election.

// solution by aditya20
function solution(votes, k) {
    const max = Math.max(...votes);
    let count = 0;

    if (k === 0) {
        for (vote of votes)
            if (vote === max)
                count++;

        return count === 1 ? 1 : 0;
    }

    for (vote of votes)
        if (max < vote + k)
            count++;

    return count;
}

const assert = require('assert');
function testSolution() {
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
}

testSolution();
