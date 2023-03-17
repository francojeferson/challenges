// This is a function that takes four arguments - yourLeft (an integer), yourRight (an integer), friendsLeft (an integer), and friendsRight (an integer).
// The function first creates two arrays containing the integers yourLeft and yourRight (the "me" array) and friendsLeft and friendsRight (the "friend" array).
// The ".sort()" method sorts the arrays in ascending order, and the ".join()" method concatenates the sorted elements into a single string.
// The function then checks whether the "me" array is equal to the "friend" array. If they are equal, the function returns true, indicating that your and your friend's hands are the same. If they are not equal, the function returns false, indicating that your and your friend's hands are different.

// solution by gennie
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    let me = [yourLeft, yourRight].sort().join("");
    let friend = [friendsLeft, friendsRight].sort().join("");

    return me === friend;
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
