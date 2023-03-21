// This is a function named solution that takes a matrix as its input. The function generates all possible squares of size 2x2 inside the matrix and then removes duplicates. The output is the number of unique squares found.
// Here's a detailed breakdown of what the code does:

// Declare and initialize an empty array called squares.

// Use a nested for loop to iterate over the rows and columns of the input matrix.
// a. The outer loop iterates over the rows and ends at the second-last row.
// b. The inner loop iterates over the columns and ends at the second-last column.

// Within the nested loops, generate a string of four characters in the following order:
//  matrix[i][j]
//  matrix[i][j+1]
//  matrix[i+1][j]
//  matrix[i+1][j+1]

// Push the generated string into the squares array.

// Use the filter method to remove duplicates in the squares array.
// a. The function inside the filter method compares the index of the current item square to the index of the first occurrence of the item square in the squares array.
// b. If the indices are equal, it means that the current item is the first instance of the square, so it is kept in the filtered array.
// c. If the indices are not equal, it means that the current item is not the first instance of this square, so it is filtered out of the array.

// Return the length of the filtered squares array. This is the number of unique squares of size 2x2 found in the input matrix.

function solution(matrix) {
    let squares = [];
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            squares.push(matrix[i][j] + '' + matrix[i][j + 1] + '' + matrix[i + 1][j] + '' + matrix[i + 1][j + 1]);
        }
    }
    return squares.filter((square, index) => squares.indexOf(square) === index).length;
}

const assert = require('assert');
function testSolution() {
    let matrix =
        [[1, 2, 1],
        [2, 2, 2],
        [2, 2, 2],
        [1, 2, 3],
        [2, 2, 1]];
    assert.deepStrictEqual(solution(matrix), 6);
    console.log('Test 1: ', solution(matrix));

    matrix =
        [[9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9]];
    assert.deepStrictEqual(solution(matrix), 1);
    console.log('Test 2: ', solution(matrix));

    matrix = [[3]];
    assert.deepStrictEqual(solution(matrix), 0);
    console.log('Test 3: ', solution(matrix));

    matrix = [[3, 4, 5, 6, 7, 8, 9]];
    assert.deepStrictEqual(solution(matrix), 0);
    console.log('Test 4: ', solution(matrix));

    matrix =
        [[3],
        [4],
        [5],
        [6],
        [7]];
    assert.deepStrictEqual(solution(matrix), 0);
    console.log('Test 5: ', solution(matrix));

    matrix =
        [[2, 5, 3, 4, 3, 1, 3, 2],
        [4, 5, 4, 1, 2, 4, 1, 3],
        [1, 1, 2, 1, 4, 1, 1, 5],
        [1, 3, 4, 2, 3, 4, 2, 4],
        [1, 5, 5, 2, 1, 3, 1, 1],
        [1, 2, 3, 3, 5, 1, 2, 4],
        [3, 1, 4, 4, 4, 1, 5, 5],
        [5, 1, 3, 3, 1, 5, 3, 5],
        [5, 4, 4, 3, 5, 4, 4, 4]];
    assert.deepStrictEqual(solution(matrix), 54);
    console.log('Test 6: ', solution(matrix));

    matrix = [[1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 9, 9, 9, 2, 3, 9]];
    assert.deepStrictEqual(solution(matrix), 0);
    console.log('Test 7: ', solution(matrix));
}

testSolution();
