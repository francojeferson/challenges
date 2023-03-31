// The provided function solution takes in four integer arguments: yourLeft, yourRight, friendsLeft, and friendsRight.
// The function returns true if the first condition within the return statement is true - which checks if yourLeft is strictly equal to friendsLeft AND yourRight is strictly equal to friendsRight.
// Otherwise, it evaluates the second condition within the return statement - which checks if yourLeft is strictly equal to friendsRight AND yourRight is strictly equal to friendsLeft.
// If either of these two conditions evaluate to true, the overall expression will return true. If not, it will evaluate to false.
// In other words, the function is checking whether the cards that you and your friend are holding are the same, regardless of their positions.

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    return (yourLeft === friendsLeft && yourRight === friendsRight) || (yourLeft === friendsRight && yourRight === friendsLeft);
}

const assert = require('assert');
function testSolution() {
    try {
        let yourLeft = 10;
        let yourRight = 15;
        let friendsLeft = 15;
        let friendsRight = 10;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
        console.log('Test 1: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 15;
        yourRight = 10;
        friendsLeft = 15;
        friendsRight = 10;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
        console.log('Test 2: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 15;
        yourRight = 10;
        friendsLeft = 15;
        friendsRight = 9;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), false);
        console.log('Test 3: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 10;
        yourRight = 5;
        friendsLeft = 5;
        friendsRight = 10;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
        console.log('Test 4: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 10;
        yourRight = 15;
        friendsLeft = 5;
        friendsRight = 20;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), false);
        console.log('Test 5: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 10;
        yourRight = 20;
        friendsLeft = 10;
        friendsRight = 20;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
        console.log('Test 6: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 5;
        yourRight = 20;
        friendsLeft = 20;
        friendsRight = 5;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
        console.log('Test 7: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 20;
        yourRight = 15;
        friendsLeft = 5;
        friendsRight = 20;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), false);
        console.log('Test 8: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 5;
        yourRight = 10;
        friendsLeft = 5;
        friendsRight = 10;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
        console.log('Test 9: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 1;
        yourRight = 10;
        friendsLeft = 10;
        friendsRight = 0;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), false);
        console.log('Test 10: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 5;
        yourRight = 5;
        friendsLeft = 10;
        friendsRight = 10;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), false);
        console.log('Test 11: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 10;
        yourRight = 5;
        friendsLeft = 10;
        friendsRight = 6;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), false);
        console.log('Test 12: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 1;
        yourRight = 1;
        friendsLeft = 1;
        friendsRight = 1;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
        console.log('Test 13: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

        yourLeft = 0;
        yourRight = 10;
        friendsLeft = 10;
        friendsRight = 0;
        assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
        console.log('Test 14: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
