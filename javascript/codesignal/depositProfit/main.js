// This code defines a function named solution which takes three parameters (deposit, rate, and threshold) representing the initial deposit amount, the annual interest rate (as a percentage), and a threshold amount. The function calculates how many years it takes for the deposit to reach the threshold amount based on the interest rate. The function uses a while loop to continuously add the interest to the deposit amount until it reaches or exceeds the threshold. The years variable tracks how many years it takes to reach the threshold. The function returns the number of years it takes to reach the threshold.

function solution(deposit, rate, threshold) {
    let years = 0;
    while (deposit < threshold) {
        deposit += deposit * rate / 100;
        years++;
    }
    return years;
}

const assert = require('assert');
function testSolution() {
    try {
        let deposit = 100;
        let rate = 20;
        let threshold = 170;
        assert.deepStrictEqual(solution(deposit, rate, threshold), 3);
        console.log('Test 1: ', solution(deposit, rate, threshold));

        deposit = 100;
        rate = 1;
        threshold = 101;
        assert.deepStrictEqual(solution(deposit, rate, threshold), 1);
        console.log('Test 2: ', solution(deposit, rate, threshold));

        deposit = 1;
        rate = 100;
        threshold = 64;
        assert.deepStrictEqual(solution(deposit, rate, threshold), 6);
        console.log('Test 3: ', solution(deposit, rate, threshold));

        deposit = 20;
        rate = 20;
        threshold = 50;
        assert.deepStrictEqual(solution(deposit, rate, threshold), 6);
        console.log('Test 4: ', solution(deposit, rate, threshold));

        deposit = 50;
        rate = 25;
        threshold = 100;
        assert.deepStrictEqual(solution(deposit, rate, threshold), 4);
        console.log('Test 5: ', solution(deposit, rate, threshold));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
