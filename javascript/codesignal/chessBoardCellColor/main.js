// This function compares whether the cells of two chessboards are the same color. It does this by checking the ASCII code of the first character of the string given for each cell and checking to see if it is even or odd. If the two results are equal, this means that both cells are the same color and the function will return true; otherwise it will return false.
// Essa função compara se as células de dois tabuleiros de xadrez são da mesma cor. Ela faz isso verificando o código ASCII do primeiro caractere da string dada para cada célula e verificando se é par ou ímpar. Se os dois resultados forem iguais, isso significa que ambas as células são da mesma cor e a função retornará verdadeiro; caso contrário, ela retornará falso.

function solution(cell1, cell2) {
    const cell1Color = cell1[0].charCodeAt(0) % 2 === (cell1[1] & 1);
    const cell2Color = cell2[0].charCodeAt(0) % 2 === (cell2[1] & 1);
    return cell1Color === cell2Color;
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
