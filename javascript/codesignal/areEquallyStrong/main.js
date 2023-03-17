// The code defines a function called solution that takes four parameters: yourLeft, yourRight, friendsLeft, and friendsRight. The function returns a boolean value that represents whether you and your friend can exchange one glove each and end up with a pair of gloves.
// The logic of the function works as follows:

// Check if your left glove matches your friend's left glove AND your right glove matches your friend's right glove.
// If step 1 is false, check if your left glove matches your friend's right glove AND your right glove matches your friend's left glove.
// If either step 1 or step 2 is true, it means you and your friend can exchange one glove each and end up with a pair of gloves, so the function returns true. Otherwise, it returns false.

// In other words, the function checks if you and your friend have complementary gloves that can be exchanged to form a pair.

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    return yourLeft === friendsLeft ? yourRight === friendsRight : yourLeft === friendsRight && yourRight === friendsLeft;
}

const assert = require('assert');
function testSolution() {
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
}

testSolution();
