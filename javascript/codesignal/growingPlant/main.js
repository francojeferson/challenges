// This code defines a function called solution that takes in three parameters:
// upSpeed - an integer representing the speed (in meters per hour) that the person climbs up the desired height.
// downSpeed - an integer representing the speed (in meters per hour) that the person slides down the height while resting.
// desiredHeight - an integer representing the desired height (in meters) that the person wants to climb.
// The function initializes two variables, time and height, to 0. A while loop runs infinitely and increases the variable time by 1 with each iteration. In each iteration, the person climbs up with a speed of upSpeed, and if the height exceeds or equals the desiredHeight, the function will return the time lapsed. If the person has still not reached the desired height, then they slide down by downSpeed until the next iteration.

function solution(upSpeed, downSpeed, desiredHeight) {
    let time = 0;
    let height = 0;
    while (true) {
        time++;
        height += upSpeed;
        if (height >= desiredHeight) {
            return time;
        }
        height -= downSpeed;
    }
}

const assert = require('assert');
function testSolution() {
    let upSpeed = 100;
    let downSpeed = 10;
    let desiredHeight = 910;
    assert.deepStrictEqual(solution(upSpeed, downSpeed, desiredHeight), 10);
    console.log('Test 1: ', solution(upSpeed, downSpeed, desiredHeight));

    upSpeed = 10;
    downSpeed = 9;
    desiredHeight = 4;
    assert.deepStrictEqual(solution(upSpeed, downSpeed, desiredHeight), 1);
    console.log('Test 2: ', solution(upSpeed, downSpeed, desiredHeight));

    upSpeed = 5;
    downSpeed = 2;
    desiredHeight = 7;
    assert.deepStrictEqual(solution(upSpeed, downSpeed, desiredHeight), 2);
    console.log('Test 3: ', solution(upSpeed, downSpeed, desiredHeight));

    upSpeed = 7;
    downSpeed = 3;
    desiredHeight = 443;
    assert.deepStrictEqual(solution(upSpeed, downSpeed, desiredHeight), 110);
    console.log('Test 4: ', solution(upSpeed, downSpeed, desiredHeight));

    upSpeed = 6;
    downSpeed = 5;
    desiredHeight = 10;
    assert.deepStrictEqual(solution(upSpeed, downSpeed, desiredHeight), 5);
    console.log('Test 5: ', solution(upSpeed, downSpeed, desiredHeight));
}

testSolution();
