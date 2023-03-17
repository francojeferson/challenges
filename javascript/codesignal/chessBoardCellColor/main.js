// The above code defines a function called solution that takes in two parameters: cell1 and cell2. These parameters are assumed to be strings representing the names of chessboard cells. The function returns a boolean value indicating whether or not the two cells have the same color on the chessboard.
// The function calculates whether the cells are the same color by checking if their row and column positions are both either odd or even. It does this by comparing the ASCII values of the first character in each parameter (which represents the column) to the numeric value of the second character (which represents the row) for both cells, and performs a modulus operation to determine if they are both odd or even.
// If the cells are the same color, the function returns true. Otherwise, it returns false.

function solution(cell1, cell2) {
    const cell1Color = cell1[0].charCodeAt(0) % 2 === cell1[1] % 2;
    const cell2Color = cell2[0].charCodeAt(0) % 2 === cell2[1] % 2;
    return cell1Color === cell2Color;
}

const assert = require('assert');
function testSolution() {
    let cell1 = "A1";
    let cell2 = "C3";
    assert.deepStrictEqual(solution(cell1, cell2), true);
    console.log('Test 1:', solution(cell1, cell2));

    cell1 = "A1";
    cell2 = "H3";
    assert.deepStrictEqual(solution(cell1, cell2), false);
    console.log('Test 2:', solution(cell1, cell2));

    cell1 = "A1";
    cell2 = "A2";
    assert.deepStrictEqual(solution(cell1, cell2), false);
    console.log('Test 3:', solution(cell1, cell2));

    cell1 = "A1";
    cell2 = "B2";
    assert.deepStrictEqual(solution(cell1, cell2), true);
    console.log('Test 4:', solution(cell1, cell2));

    cell1 = "B3";
    cell2 = "H8";
    assert.deepStrictEqual(solution(cell1, cell2), false);
    console.log('Test 5:', solution(cell1, cell2));

    cell1 = "C3";
    cell2 = "B5";
    assert.deepStrictEqual(solution(cell1, cell2), false);
    console.log('Test 6:', solution(cell1, cell2));

    cell1 = "G5";
    cell2 = "E7";
    assert.deepStrictEqual(solution(cell1, cell2), true);
    console.log('Test 7:', solution(cell1, cell2));

    cell1 = "C8";
    cell2 = "H8";
    assert.deepStrictEqual(solution(cell1, cell2), false);
    console.log('Test 8:', solution(cell1, cell2));

    cell1 = "D2";
    cell2 = "D2";
    assert.deepStrictEqual(solution(cell1, cell2), true);
    console.log('Test 9:', solution(cell1, cell2));

    cell1 = "A2";
    cell2 = "A5";
    assert.deepStrictEqual(solution(cell1, cell2), false);
    console.log('Test 10:', solution(cell1, cell2));
}

testSolution();
