// This is a function named solution that takes one parameter sequence. The function checks whether the given sequence of numbers is an almost increasing sequence or not. An almost increasing sequence is defined as a sequence where you can remove at most one element from the sequence and the resulting sequence will be an increasing sequence. The function uses a for loop to go through the entire sequence and checks if the current element is smaller than or equal to the previous element. If this is the case, it increments a variable named bad. If bad becomes greater than 1, the function returns false because the sequence is not an almost increasing sequence. If the current element is smaller than or equal to the element two positions before it and the current element plus one position is smaller than or equal to the previous element, the function returns false because removing the current element would result in a non-increasing sequence. If the loop completes without returning false, the function will return true indicating that the sequence is an almost increasing sequence.

// solution by myjinxin2015
function solution(sequence) {
    var bad = 0;
    for (var i = 1; i < sequence.length; i++) if (sequence[i] <= sequence[i - 1]) {
        bad++;
        if (bad > 1) return false;
        if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
    }
    return true;
}

const assert = require('assert');
function testSolution() {
    let sequence = [1, 3, 2, 1];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 1: ', solution(sequence));

    sequence = [1, 3, 2];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 2: ', solution(sequence));

    sequence = [1, 2, 1, 2];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 3: ', solution(sequence));

    sequence = [3, 6, 5, 8, 10, 20, 15];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 4: ', solution(sequence));

    sequence = [1, 1, 2, 3, 4, 4];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 5: ', solution(sequence));

    sequence = [1, 4, 10, 4, 2];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 6: ', solution(sequence));

    sequence = [10, 1, 2, 3, 4, 5];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 7: ', solution(sequence));

    sequence = [1, 1, 1, 2, 3];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 8: ', solution(sequence));

    sequence = [0, -2, 5, 6];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 9: ', solution(sequence));

    sequence = [1, 2, 3, 4, 5, 3, 5, 6];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 10: ', solution(sequence));

    sequence = [40, 50, 60, 10, 20, 30];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 11: ', solution(sequence));

    sequence = [1, 1];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 12: ', solution(sequence));

    sequence = [1, 2, 5, 3, 5];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 13: ', solution(sequence));

    sequence = [1, 2, 5, 5, 5];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 14: ', solution(sequence));

    sequence = [10, 1, 2, 3, 4, 5, 6, 1];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 15: ', solution(sequence));

    sequence = [1, 2, 3, 4, 3, 6];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 16: ', solution(sequence));

    sequence = [1, 2, 3, 4, 99, 5, 6];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 17: ', solution(sequence));

    sequence = [123, -17, -5, 1, 2, 3, 12, 43, 45];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 18: ', solution(sequence));

    sequence = [3, 5, 67, 98, 3];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 19: ', solution(sequence));
}

testSolution();
