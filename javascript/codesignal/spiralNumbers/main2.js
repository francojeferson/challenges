// This code generates an n x n grid and fills the grid with numbers from 1 to n-squared, in a spiral pattern starting from the top left corner of the grid, and moving from left to right, top to bottom, right to left and then bottom up on alternate turns. The output of the function is the completed grid, represented as a two dimensional list, where each sublist represents a row of the grid.
// The code works by creating a directions list which holds four values, namely, [0, 1], [1, 0], [0, -1], and [-1, 0], which correspond to the directions of North, East, South and West, respectively. It initializes variables for the current direction (curDir) and current position (curPos), before creating an empty res list to store the final grid.
// It then loops over the integer values from 1 to n-squared, and for each value it adds this value to the current position within the res list, then calculates the next position by adding the current direction to the current position. If the next position is out of bounds or has already been filled, it updates the current direction to the next clockwise direction and then tries to calculate the next position again. The loop continues until all positions in the grid have been populated, at which point the final grid is returned.

// solution by bandorthild
function solution(n) {
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    curDir = 0;
    curPos = [0, 0];
    res = [...new Array(n).keys()].map(x => [...new Array(n).keys()].map(x => 0));
    for (i = 1; i < n * n + 1; i++) {
        res[curPos[0]][curPos[1]] = i;
        nextPos = [curPos[0] + dirs[curDir][0], curPos[1] + dirs[curDir][1]];
        if (!(0 <= nextPos[0] && nextPos[0] < n &&
            0 <= nextPos[1] && nextPos[1] < n &&
            res[nextPos[0]][nextPos[1]] == 0)) {
            curDir = (curDir + 1) % 4;
            nextPos = [curPos[0] + dirs[curDir][0], curPos[1] + dirs[curDir][1]];
        }
        curPos = nextPos;
    }
    return res;
}

const assert = require('assert');
function testSolution() {
    try {
        let n = 3;
        assert.deepStrictEqual(solution(n), [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5]]);
        console.log('Test 1: ', solution(n));

        n = 5;
        assert.deepStrictEqual(solution(n), [
            [1, 2, 3, 4, 5],
            [16, 17, 18, 19, 6],
            [15, 24, 25, 20, 7],
            [14, 23, 22, 21, 8],
            [13, 12, 11, 10, 9]]);
        console.log('Test 2: ', solution(n));

        n = 6;
        assert.deepStrictEqual(solution(n), [
            [1, 2, 3, 4, 5, 6],
            [20, 21, 22, 23, 24, 7],
            [19, 32, 33, 34, 25, 8],
            [18, 31, 36, 35, 26, 9],
            [17, 30, 29, 28, 27, 10],
            [16, 15, 14, 13, 12, 11]]);
        console.log('Test 3: ', solution(n));

        n = 7;
        assert.deepStrictEqual(solution(n), [
            [1, 2, 3, 4, 5, 6, 7],
            [24, 25, 26, 27, 28, 29, 8],
            [23, 40, 41, 42, 43, 30, 9],
            [22, 39, 48, 49, 44, 31, 10],
            [21, 38, 47, 46, 45, 32, 11],
            [20, 37, 36, 35, 34, 33, 12],
            [19, 18, 17, 16, 15, 14, 13]]);
        console.log('Test 4: ', solution(n));

        n = 10;
        assert.deepStrictEqual(solution(n), [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            [36, 37, 38, 39, 40, 41, 42, 43, 44, 11],
            [35, 64, 65, 66, 67, 68, 69, 70, 45, 12],
            [34, 63, 84, 85, 86, 87, 88, 71, 46, 13],
            [33, 62, 83, 96, 97, 98, 89, 72, 47, 14],
            [32, 61, 82, 95, 100, 99, 90, 73, 48, 15],
            [31, 60, 81, 94, 93, 92, 91, 74, 49, 16],
            [30, 59, 80, 79, 78, 77, 76, 75, 50, 17],
            [29, 58, 57, 56, 55, 54, 53, 52, 51, 18],
            [28, 27, 26, 25, 24, 23, 22, 21, 20, 19]]);
        console.log('Test 5: ', solution(n));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
