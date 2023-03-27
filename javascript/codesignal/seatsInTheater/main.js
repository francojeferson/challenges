// This code defines a function called solution that takes four arguments: nCols, nRows, col, and row. The function returns the result of multiplying (nCols - col + 1) and (nRows - row). The formula used in this function gives the total number of squares in an nRows x nCols grid after removing the row row and column col.

function solution(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row);
}

const assert = require('assert');
function testSolution() {
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
}

testSolution();
