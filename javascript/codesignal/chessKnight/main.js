// This code defines a function called solution that takes a chess board cell location as an argument (e.g. "a1" or "h8") and returns the number of possible moves a knight can make from that cell location.
// To do this, the function first converts the letter part of the cell location to a corresponding number value (e.g. "a" becomes 1, "b" becomes 2, etc) and then gets the second character which indicates the numeric row number of the cell.
// The function then checks all the possible knight moves from the current cell location by adding or subtracting 2 from the x-coordinate and 1 from the y-coordinate, or adding or subtracting 1 from the x-coordinate and 2 from the y-coordinate. It checks that the resulting coordinates are not outside the boundaries of the chess board (i.e. between 1 and 8) and increments a count variable for each valid move.
// Finally, the function returns the count value representing the total number of valid knight moves for the given cell location.

function solution(cell) {
    let x = cell.charCodeAt(0) - 96;
    let y = parseInt(cell[1]);
    let count = 0;
    if (x + 2 <= 8 && y + 1 <= 8) count++;
    if (x + 2 <= 8 && y - 1 >= 1) count++;
    if (x - 2 >= 1 && y + 1 <= 8) count++;
    if (x - 2 >= 1 && y - 1 >= 1) count++;
    if (x + 1 <= 8 && y + 2 <= 8) count++;
    if (x + 1 <= 8 && y - 2 >= 1) count++;
    if (x - 1 >= 1 && y + 2 <= 8) count++;
    if (x - 1 >= 1 && y - 2 >= 1) count++;
    return count;
}

const assert = require('assert');
function testSolution() {
    let cell = "a1";
    assert.deepStrictEqual(solution(cell), 2);
    console.log('Test 1: ', solution(cell));

    cell = "c2";
    assert.deepStrictEqual(solution(cell), 6);
    console.log('Test 2: ', solution(cell));

    cell = "d4";
    assert.deepStrictEqual(solution(cell), 8);
    console.log('Test 3: ', solution(cell));

    cell = "g6";
    assert.deepStrictEqual(solution(cell), 6);
    console.log('Test 4: ', solution(cell));

    cell = "a3";
    assert.deepStrictEqual(solution(cell), 4);
    console.log('Test 5: ', solution(cell));

    cell = "b7";
    assert.deepStrictEqual(solution(cell), 4);
    console.log('Test 6: ', solution(cell));

    cell = "h8";
    assert.deepStrictEqual(solution(cell), 2);
    console.log('Test 7: ', solution(cell));

    cell = "h6";
    assert.deepStrictEqual(solution(cell), 4);
    console.log('Test 8: ', solution(cell));

    cell = "g8";
    assert.deepStrictEqual(solution(cell), 3);
    console.log('Test 9: ', solution(cell));

    cell = "a5";
    assert.deepStrictEqual(solution(cell), 4);
    console.log('Test 10: ', solution(cell));
}

testSolution();
