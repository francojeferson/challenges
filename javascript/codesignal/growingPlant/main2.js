// This is a function named solution that takes three parameters: upSpeed (number), downSpeed (number), and desiredHeight (number). The function assumes that the initial height of a snail is 0. The function calculates how many days it will take the snail to reach the desiredHeight, assuming that the snail can climb upSpeed meters per day and then slide back down downSpeed meters. The function returns the number of days it will take the snail.
// If the upSpeed is greater than or equal to the desiredHeight, the function returns 1 because the snail will only need one day to climb to the top.
// Otherwise, the function uses the formula (desiredHeight - upSpeed) / (upSpeed - downSpeed) to calculate how many days the snail will spend climbing the tree. Since the snail must reach the top of the tree, the function rounds up the result of this calculation using Math.ceil, and then adds 1 to account for the initial climb. Finally, the function returns this result.

// solution by fäbu_l
function solution(upSpeed, downSpeed, desiredHeight) {
    return upSpeed > desiredHeight ? 1 : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
