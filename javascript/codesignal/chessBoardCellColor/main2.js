// The given code is a JavaScript function that takes two cell locations on a chessboard as input, and returns whether or not they are the same color on the board.
// The const color function takes a string parameter s. It converts the first character of the string to a Buffer object, subtracts the ASCII value of the second character of the string from it, and then applies modulo 2 to the result. In other words, it returns 0 if the difference of the ASCII values of the first and second character of the string is even, and returns 1 if it is odd.
// The const solution function takes two input parameters, cell1 and cell2, which represent the two cell locations in algebraic notation on the chessboard. The function then calls the color function on each input and returns a boolean value depending on whether the two colors are the same. If the colors are the same, the function returns true, otherwise it returns false.
// In summary, the code determines whether two chessboard cells are the same color.

// solution by jraghon
const color = s => (Buffer(s)[0] - s[1]) % 2;

const solution = (cell1, cell2) => color(cell1) == color(cell2);

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
