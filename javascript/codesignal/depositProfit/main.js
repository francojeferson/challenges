// This function takes three parameters (deposit, rate, and threshold) and returns the number of years it takes for the deposit to grow until it reaches the threshold. The code uses a looping loop to calculate the number of years needed for the deposit to be larger than the threshold. On each iteration, a percentage of the entered rate is added to the deposit and one year is incremented. When the loop condition is satisfied (deposit >= threshold) the function returns the number of years.
// Esta função recebe três parâmetros (depósito, taxa e limiar) e retorna o número de anos necessários para que o depósito cresça até atingir o limiar. O código usa um looping para calcular a quantidade de anos necessários para que o depósito seja maior que o limiar. Em cada iteração, adiciona-se ao depósito uma porcentagem da taxa informada e é incrementado um ano. Quando a condição do loop é satisfeita (deposit >= threshold) a função retorna o número de anos.

function solution(deposit, rate, threshold) {
    let years = 0;
    while (deposit < threshold) {
        deposit += deposit * rate / 100;
        years++;
    }
    return years;
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
