// This function compares whether the sum of the values of the cells passed as argument is even or odd. The "board" object relates the letters and numbers corresponding to the coordinates of an 8x8 table (chess game). The function returns true if the sum of the two positions is even, and false if it is odd.
// Esta função compara se a soma dos valores das células passadas como argumento é par ou ímpar. O objeto "board" relaciona as letras e o números correspondentes às coordenadas de uma tabela de 8x8 (jogo de xadrez). A função retorna true se a soma das duas posições for par, e false caso seja ímpar.

function solution(cell1, cell2) {
    const board = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8
    };

    // There is no need to create temporary variables to store the result of adding up the cell positions. The code can be reduced by doing the comparison directly in the return.
    // Não há necessidade de criar variáveis temporárias para armazenar o resultado da soma das posições das células. O código pode ser reduzido efetuando a comparação diretamente no return.
    return (board[cell1[0]] + parseInt(cell1[1])) % 2 === (board[cell2[0]] + parseInt(cell2[1])) % 2;
}

// unit test
// teste unitário
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
