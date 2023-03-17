// The function solution accepts an array of numbers called statues. The purpose of the function is to count how many numbers are missing from the sequence of numbers that starts at the smallest number in the array and ends at the largest number in the array.
// The following is a step-by-step plan for how the function works:

// Step 1: Find the smallest number in the input array using Math.min(...statues) and store it in a variable called min.
// Step 2: Find the largest number in the input array using Math.max(...statues) and store it in a variable called max.
// Step 3: Initialize a variable called count to 0, to keep track of how many numbers are missing in the sequence.
// Step 4: Start a for loop that loops through each number in the sequence starting from min and ending with max.
// Step 5: Inside the loop, check if the current number is not included in the original array using !statues.includes(i).
// Step 6: If the current number is not included in the array, increment the count variable by 1 using count++.
// Step 7: After the loop has finished, return the count variable, which represents the number of missing numbers in the sequence.

function solution(statues) {
    var min = Math.min(...statues);
    var max = Math.max(...statues);
    var count = 0;
    for (var i = min; i <= max; i++) {
        if (!statues.includes(i)) {
            count++;
        }
    }
    return count;
}

const assert = require('assert');
function testSolution() {
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
}

testSolution();
