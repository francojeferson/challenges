// This code is a function that takes in an array of statues as a parameter. It first finds the minimum and maximum values in the array using the Math.min() and Math.max() methods. It then creates a loop that iterates from the minimum value to the maximum value, and checks if each value is included in the statues array using the .includes() method. If it is not included, it adds 1 to a count variable. Finally, it returns this count variable which represents how many statues are missing from the array.

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
