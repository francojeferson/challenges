// This function receives two parameters: an integer n and an integer firstNumber. First, the variable x is defined as the sum of firstNumber and n divided by 2. Then, the function returns x minus n if x is greater than or equal to n, otherwise x is returned. In other words, this function calculates the mean between firstNumber and n.
// Esta função recebe dois parâmetros: um inteiro n e um número inteiro firstNumber. Primeiro, a variável x é definida como a soma de firstNumber e n dividido por 2. Então, a função retorna x menos n se x for maior ou igual a n, caso contrário, é retornado x. Em outras palavras, essa função calcula o meio entre firstNumber e n.

function solution(n, firstNumber) {
    let x = firstNumber + n / 2;
    return x >= n ? x - n : x;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let n = 10;
    let firstNumber = 2;
    assert.strictEqual(solution(n, firstNumber), 7);
    console.log('Test 1: ', solution(n, firstNumber));

    n = 10;
    firstNumber = 7;
    assert.strictEqual(solution(n, firstNumber), 2);
    console.log('Test 2: ', solution(n, firstNumber));

    n = 4;
    firstNumber = 1;
    assert.strictEqual(solution(n, firstNumber), 3);
    console.log('Test 3: ', solution(n, firstNumber));

    n = 6;
    firstNumber = 3;
    assert.strictEqual(solution(n, firstNumber), 0);
    console.log('Test 4: ', solution(n, firstNumber));

    n = 18;
    firstNumber = 6;
    assert.strictEqual(solution(n, firstNumber), 15);
    console.log('Test 5: ', solution(n, firstNumber));

    n = 12;
    firstNumber = 10;
    assert.strictEqual(solution(n, firstNumber), 4);
    console.log('Test 6: ', solution(n, firstNumber));

    n = 18;
    firstNumber = 5;
    assert.strictEqual(solution(n, firstNumber), 14);
    console.log('Test 7: ', solution(n, firstNumber));
}

testSolution();
