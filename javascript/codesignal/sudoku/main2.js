// This code defines a function called solution which takes a 2D array named grid as its argument. The function checks whether the array represents a valid Sudoku solution or not. The function returns true if the Sudoku solution is valid, and false otherwise.
// To check if the given Sudoku solution is valid, the function utilizes a two-step process:

// Check if each row and each column of the grid contains all digits from 1 to 9 without repetition.
// Check if each of the 3x3 sub-grids (total 9 sub-grids) of the given Sudoku grid contains all digits from 1 to 9 without repetition.

// The steps are described in detail below:
// Step 1 (Lines 2-11):

// A loop is defined which runs for each row of the grid (lines 2-3).
// A set is created each for row and column (lines 4-5).
// Another loop is nested inside this first loop, which runs for each column of the grid (lines 6-10).
// For each row, its digits are added to the row-set (line 7).
// For each column, its digits are added to the column-set (line 8).
// If the size of either the row-set or the column-set is less than 9, the function returns false since it means there is duplication or missing digits in that row or column (line 11).

// Step 2 (Lines 13-21):

// Two nested loops are defined which run for every 3rd index of both the row and column indices of the grid (lines 13-14).
// A set is created for the sub-grid (3x3) being analyzed (line 15).
// Another two nested loops are defined which run for each index of the sub-grid (lines 16-19).
// For each element in the corresponding sub-grid, its digits are added to the sub-grid set (line 18).
// If the size of the sub-grid set is less than 9, the function returns false since it means there is duplication or missing digits in that sub-grid (line 21).

// Step 3 (Line 23):

// If the code reached this far and hasn't returned false already, then it means the given Sudoku solution is valid. The function returns true.

// solution by cristian-f_c
function solution(grid) {
    for (let i = 0; i < 9; i++) {
        let col = new Set();
        let row = new Set();
        for (let j = 0; j < 9; j++) {
            row.add(grid[i][j]);
            col.add(grid[j][i]);
        }
        if (col.size < 9 || row.size < 9) {
            return false;
        }
    }

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let threeByThree = new Set();
            for (let k = 0; k < 3; k++) {
                for (let m = 0; m < 3; m++) {
                    threeByThree.add(grid[i + k][j + m]);
                }
            }
            if (threeByThree.size < 9) {
                return false;
            }
        }
    }

    return true;
}

const assert = require('assert');
function testSolution() {
    try {
        let grid = [
            [1, 3, 2, 5, 4, 6, 9, 8, 7],
            [4, 6, 5, 8, 7, 9, 3, 2, 1],
            [7, 9, 8, 2, 1, 3, 6, 5, 4],
            [9, 2, 1, 4, 3, 5, 8, 7, 6],
            [3, 5, 4, 7, 6, 8, 2, 1, 9],
            [6, 8, 7, 1, 9, 2, 5, 4, 3],
            [5, 7, 6, 9, 8, 1, 4, 3, 2],
            [2, 4, 3, 6, 5, 7, 1, 9, 8],
            [8, 1, 9, 3, 2, 4, 7, 6, 5]];
        assert.deepStrictEqual(solution(grid), true);
        console.log('Test 1: ', solution(grid));

        grid = [
            [8, 3, 6, 5, 3, 6, 7, 2, 9],
            [4, 2, 5, 8, 7, 9, 3, 8, 1],
            [7, 9, 1, 2, 1, 4, 6, 5, 4],
            [9, 2, 1, 4, 3, 5, 8, 7, 6],
            [3, 5, 4, 7, 6, 8, 2, 1, 9],
            [6, 8, 7, 1, 9, 2, 5, 4, 3],
            [5, 7, 6, 9, 8, 1, 4, 3, 2],
            [2, 4, 3, 6, 5, 7, 1, 9, 8],
            [8, 1, 9, 3, 2, 4, 7, 6, 5]];
        assert.deepStrictEqual(solution(grid), false);
        console.log('Test 2: ', solution(grid));

        grid = [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 5, 6, 7, 8, 9]];
        assert.deepStrictEqual(solution(grid), false);
        console.log('Test 3: ', solution(grid));

        grid = [
            [1, 3, 4, 2, 5, 6, 9, 8, 7],
            [4, 6, 8, 5, 7, 9, 3, 2, 1],
            [7, 9, 2, 8, 1, 3, 6, 5, 4],
            [9, 2, 3, 1, 4, 5, 8, 7, 6],
            [3, 5, 7, 4, 6, 8, 2, 1, 9],
            [6, 8, 1, 7, 9, 2, 5, 4, 3],
            [5, 7, 6, 9, 8, 1, 4, 3, 2],
            [2, 4, 5, 6, 3, 7, 1, 9, 8],
            [8, 1, 9, 3, 2, 4, 7, 6, 5]];
        assert.deepStrictEqual(solution(grid), false);
        console.log('Test 4: ', solution(grid));

        grid = [
            [1, 3, 2, 5, 4, 6, 9, 8, 7],
            [4, 6, 5, 8, 7, 9, 3, 2, 1],
            [7, 9, 8, 2, 1, 3, 6, 5, 4],
            [9, 2, 1, 4, 3, 5, 8, 7, 6],
            [3, 5, 4, 7, 6, 8, 2, 1, 9],
            [6, 8, 7, 1, 9, 2, 5, 4, 3],
            [5, 4, 6, 9, 8, 1, 4, 3, 2],
            [2, 7, 3, 6, 5, 7, 1, 9, 8],
            [8, 1, 9, 3, 2, 4, 7, 6, 5]];
        assert.deepStrictEqual(solution(grid), false);
        console.log('Test 5: ', solution(grid));

        grid = [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [4, 6, 5, 8, 7, 9, 3, 2, 1],
            [7, 9, 8, 2, 1, 3, 6, 5, 4],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [4, 6, 5, 8, 7, 9, 3, 2, 1],
            [7, 9, 8, 2, 1, 3, 6, 5, 4],
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [4, 6, 5, 8, 7, 9, 3, 2, 1],
            [7, 9, 8, 2, 1, 3, 6, 5, 4]];
        assert.deepStrictEqual(solution(grid), false);
        console.log('Test 6: ', solution(grid));

        grid = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 9, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 7, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]];
        assert.deepStrictEqual(solution(grid), false);
        console.log('Test 7: ', solution(grid));

        grid = [
            [5, 5, 5, 5, 5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5, 5, 5, 5, 5]];
        assert.deepStrictEqual(solution(grid), false);
        console.log('Test 8: ', solution(grid));

        grid = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 3, 9, 5, 3, 4, 8],
            [1, 9, 8, 1, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]];
        assert.deepStrictEqual(solution(grid), false);
        console.log('Test 9: ', solution(grid));

        grid = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 5, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]];
        assert.deepStrictEqual(solution(grid), false);
        console.log('Test 10: ', solution(grid));

        grid = [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [4, 5, 6, 7, 8, 9, 1, 2, 3],
            [7, 8, 9, 1, 2, 3, 4, 5, 6],
            [2, 3, 4, 5, 6, 7, 8, 9, 1],
            [3, 4, 5, 6, 7, 8, 9, 1, 2],
            [5, 6, 7, 8, 9, 1, 2, 3, 4],
            [6, 7, 8, 9, 1, 2, 3, 4, 5],
            [8, 9, 1, 2, 3, 4, 5, 6, 7],
            [9, 1, 2, 3, 4, 5, 6, 7, 8]];
        assert.deepStrictEqual(solution(grid), false);
        console.log('Test 11: ', solution(grid));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
