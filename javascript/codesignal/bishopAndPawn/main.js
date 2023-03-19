// This code defines a function "solution" that takes two arguments - bishop and pawn, both representing chess pieces on a standard 8x8 chess board.
// The function first extracts the numerical coordinates for both the bishop and pawn using the "charCodeAt" method. This method returns the Unicode value of the character at a given index in a string, and as the chess board is set up using letters and numbers, we need to subtract 96 from the Unicode value of the letter to get the corresponding x-coordinate (1-8), and subtract 48 from the Unicode value of the number to get the corresponding y-coordinate (1-8).
// The function then uses the "Math.abs" function to calculate the absolute difference between the x-coordinates and y-coordinates of the bishop and the pawn. If the absolute differences are equal, this means that the bishop can capture the pawn in one move, as they are on the same diagonal line.
// Finally, the function returns a boolean value - true if the bishop can capture the pawn, and false if not.

function solution(bishop, pawn) {
    const bishopX = bishop.charCodeAt(0) - 96;
    const bishopY = bishop.charCodeAt(1) - 48;
    const pawnX = pawn.charCodeAt(0) - 96;
    const pawnY = pawn.charCodeAt(1) - 48;

    return Math.abs(bishopX - pawnX) === Math.abs(bishopY - pawnY);
}

const assert = require('assert');
function testSolution() {
    let bishop = "a1";
    let pawn = "c3";
    assert.deepStrictEqual(solution(bishop, pawn), true);
    console.log('Test 1: ', solution(bishop, pawn));

    bishop = "h1";
    pawn = "h3";
    assert.deepStrictEqual(solution(bishop, pawn), false);
    console.log('Test 2: ', solution(bishop, pawn));

    bishop = "a5";
    pawn = "c3";
    assert.deepStrictEqual(solution(bishop, pawn), true);
    console.log('Test 3: ', solution(bishop, pawn));

    bishop = "g1";
    pawn = "f3";
    assert.deepStrictEqual(solution(bishop, pawn), false);
    console.log('Test 4: ', solution(bishop, pawn));

    bishop = "e7";
    pawn = "d6";
    assert.deepStrictEqual(solution(bishop, pawn), true);
    console.log('Test 5: ', solution(bishop, pawn));

    bishop = "e7";
    pawn = "a3";
    assert.deepStrictEqual(solution(bishop, pawn), true);
    console.log('Test 6: ', solution(bishop, pawn));

    bishop = "e3";
    pawn = "a7";
    assert.deepStrictEqual(solution(bishop, pawn), true);
    console.log('Test 7: ', solution(bishop, pawn));

    bishop = "a1";
    pawn = "h8";
    assert.deepStrictEqual(solution(bishop, pawn), true);
    console.log('Test 8: ', solution(bishop, pawn));

    bishop = "a1";
    pawn = "h7";
    assert.deepStrictEqual(solution(bishop, pawn), false);
    console.log('Test 9: ', solution(bishop, pawn));

    bishop = "h1";
    pawn = "a8";
    assert.deepStrictEqual(solution(bishop, pawn), true);
    console.log('Test 10: ', solution(bishop, pawn));
}

testSolution();
