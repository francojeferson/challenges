// The code defines a function called solution which takes a parameter called cell. The function returns a value from a static chessboard array chessBoard by calculating its position in the array through the parameter cell. The parameter cell is a string that has 2 characters. The first character represents the column of the chess board in which the desired value is located and the second character represents the row.
// The first step of the function is to create a 2D array called chessBoard which holds the values we need to return.
// Then, the variable x is defined by taking the first character of the input and converting it to a number using charCodeAt(). Because 'a' has the lowest character code (97), we subtract 97 to get a zero-based index. This index now represents the column input by the user.
// Finally, the function returns the value of the corresponding row (based on the second character in the input) and column (based on the calculated index x) in the 2D array.
// The code also includes a console.log() statement that outputs the value of x to the console for debugging purposes.

// solution by tuan_h7
function solution(cell) {
    const chessBoard = [
        [2, 3, 4, 4, 4, 4, 3, 2],
        [3, 4, 6, 6, 6, 6, 4, 3],
        [4, 6, 8, 8, 8, 8, 6, 4],
        [4, 6, 8, 8, 8, 8, 6, 4],
        [4, 6, 8, 8, 8, 8, 6, 4],
        [4, 6, 8, 8, 8, 8, 6, 4],
        [3, 4, 6, 6, 6, 6, 4, 3],
        [2, 3, 4, 4, 4, 4, 3, 2],
    ];

    const x = cell[0].charCodeAt() - 97;
    console.log(x);
    return chessBoard[cell[1] - 1][x];
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
