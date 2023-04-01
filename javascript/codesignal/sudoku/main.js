// This is a JavaScript function that takes in a 9x9 2-dimensional array as a parameter. The function checks if the array represents a valid Sudoku solution by checking if each row, column, and 3x3 square contains the digits 1 through 9 exactly once.
// The function starts by initializing 3 empty arrays to store the values of each row, column, and 3x3 square. It then populates these arrays by iterating through each element of the input array and pushing the values into the appropriate row, column, and square arrays based on the indices.
// Finally, the function returns true if every row, column, and square array contains the digits 1 through 9 exactly once, and false otherwise. This is accomplished by using the array method every to check if all of the values in each row, column, and square array, after being sorted and concatenated into a string, match the string '123456789'.

function solution(grid) {
    let rows = [];
    let columns = [];
    let squares = [];
    for (let i = 0; i < 9; i++) {
        rows.push([]);
        columns.push([]);
        squares.push([]);
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            rows[i].push(grid[i][j]);
            columns[j].push(grid[i][j]);
            squares[squareIndex].push(grid[i][j]);
        }
    }
    return rows.every(row => row.sort().join('') === '123456789') &&
        columns.every(column => column.sort().join('') === '123456789') &&
        squares.every(square => square.sort().join('') === '123456789');
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
