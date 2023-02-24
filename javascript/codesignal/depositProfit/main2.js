// This function calculates how many years it will take for a given deposit to reach a limit value. The function takes as arguments the initial deposit amount, the interest rate, and the threshold amount. It uses the formula ln (threshold / deposit) / ln (1 + rate / 100), where ln is a natural logarithmic function, to calculate how many years it will take to reach the threshold value. The function Math.ceil rounds up the result and returns the integer number of years needed.
// Esta função calcula quantos anos levará para que um determinado depósito alcance um valor limite. A função recebe como argumentos o valor inicial do depósito, a taxa de juros e o valor limite. Ela usa a fórmula ln (threshold / deposit) / ln (1 + rate / 100), onde ln é uma função natural logarítmica, para calcular quantos anos levará para alcançar o valor limite. A função Math.ceil arredonda o resultado para cima e retorna o número inteiro de anos necessários.

function solution(deposit, rate, threshold) {
    return Math.ceil(Math.log(threshold / deposit) / Math.log(1 + rate / 100));
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let deposit = 100;
    let rate = 20;
    let threshold = 170;
    assert.strictEqual(solution(deposit, rate, threshold), 3);
    console.log('Test 1: ', solution(deposit, rate, threshold));

    deposit = 100;
    rate = 1;
    threshold = 101;
    assert.strictEqual(solution(deposit, rate, threshold), 1);
    console.log('Test 2: ', solution(deposit, rate, threshold));

    deposit = 1;
    rate = 100;
    threshold = 64;
    assert.strictEqual(solution(deposit, rate, threshold), 6);
    console.log('Test 3: ', solution(deposit, rate, threshold));

    deposit = 20;
    rate = 20;
    threshold = 50;
    assert.strictEqual(solution(deposit, rate, threshold), 6);
    console.log('Test 4: ', solution(deposit, rate, threshold));

    deposit = 50;
    rate = 25;
    threshold = 100;
    assert.strictEqual(solution(deposit, rate, threshold), 4);
    console.log('Test 5: ', solution(deposit, rate, threshold));
}

testSolution();
