// This code defines a function named solution that takes in two parameters, bishop and pawn. The function checks if a bishop can capture a pawn on a chessboard based on their positions.
// The first condition in the function checks if the bishop and pawn are on the same rank (row) or file (column). If this is true, then the bishop can capture the pawn, and the function returns false.
// The second condition checks if the difference between the ASCII code of the bishop's file and the pawn's file is equal to the difference between the ASCII code of the bishop's rank and the pawn's rank. If this is true, it means that the bishop and pawn are on the same diagonal, and the function returns true. Otherwise, it returns false.
// In summary, the function returns true if the bishop can capture the pawn and false otherwise.

// solution by ema_d1
function solution(bishop, pawn) {
    if (bishop.charAt(0) == pawn.charAt(0) || bishop.charAt(1) == pawn.charAt(1))
        return false;
    if (Math.abs((bishop.charCodeAt(0) - pawn.charCodeAt(0))) == Math.abs((bishop.charCodeAt(1) - pawn.charCodeAt(1))))
        return true;
    else
        return false;

}

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
