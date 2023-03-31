// This function calculates the total number of cells in a rectangular grid that is defined by the number of columns (nCols) and rows (nRows) it contains, given the starting cell (col, row) at the top left corner of the grid. The formula used to calculate the total number of cells is (nCols - (col - 1)) * (nRows - row).

// solution by epunk
function solution(nCols, nRows, col, row) {
    return (nCols - (col - 1)) * (nRows - row);
}

const assert = require('assert');
function testSolution() {
    try {
        let nCols = 16;
        let nRows = 11;
        let col = 5;
        let row = 3;
        assert.deepStrictEqual(solution(nCols, nRows, col, row), 96);
        console.log('Test 1: ', solution(nCols, nRows, col, row));

        nCols = 1;
        nRows = 1;
        col = 1;
        row = 1;
        assert.deepStrictEqual(solution(nCols, nRows, col, row), 0);
        console.log('Test 2: ', solution(nCols, nRows, col, row));

        nCols = 13;
        nRows = 6;
        col = 8;
        row = 3;
        assert.deepStrictEqual(solution(nCols, nRows, col, row), 18);
        console.log('Test 3: ', solution(nCols, nRows, col, row));

        nCols = 60;
        nRows = 100;
        col = 60;
        row = 1;
        assert.deepStrictEqual(solution(nCols, nRows, col, row), 99);
        console.log('Test 4: ', solution(nCols, nRows, col, row));

        nCols = 1000;
        nRows = 1000;
        col = 1000;
        row = 1000;
        assert.deepStrictEqual(solution(nCols, nRows, col, row), 0);
        console.log('Test 5: ', solution(nCols, nRows, col, row));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
