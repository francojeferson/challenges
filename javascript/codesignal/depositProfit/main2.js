// This code defines a function solution which takes in three parameters: deposit, rate, and threshold. The function computes the number of years, rounded up to the nearest integer, that it takes for an initial deposit (deposit) with a certain interest rate (rate) to reach a certain threshold balance (threshold), assuming that the interest compounds continuously.
// The first part of the return statement Math.log(threshold / deposit) computes the natural logarithm of the ratio of the target threshold balance to the initial deposit.
// The second part of the return statement Math.log(1 + rate / 100) computes the natural logarithm of the interest rate plus one (to account for compounding).
// The two logarithms are divided to obtain the number of compounding periods required to reach the threshold balance, and Math.ceil is used to round up to the nearest integer, representing the number of years it takes to reach the threshold balance.

// solution by ivan_d
function solution(deposit, rate, threshold) {
    return Math.ceil(Math.log(threshold / deposit) / Math.log(1 + rate / 100));
}

const assert = require('assert');
function testSolution() {
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
}

testSolution();
