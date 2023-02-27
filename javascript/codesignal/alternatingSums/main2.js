// This code is a function that takes an array as parameter. The function goes through the array and adds up the even numbers in a variable named evenSum and the odd numbers in a variable named oddSum. Finally, the function returns an array containing the sum of the even numbers and the sum of the odd numbers.
// Esse código é uma função que recebe um array como parâmetro. A função percorre o array e soma os números pares em uma variável chamada evenSum e os números ímpares em uma variável chamada oddSum. Por fim, a função retorna um array contendo a soma dos números pares e a soma dos números ímpares.

const solution = (a) => {
    let evenSum = 0;
    let oddSum = 0;

    a.forEach((num, index) => {
        if (index % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    });

    return [evenSum, oddSum];
};

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let a = [50, 60, 60, 45, 70];
    assert.deepStrictEqual(solution(a), [180, 105]);
    console.log('Test 1: ', solution(a));

    a = [100, 50];
    assert.deepStrictEqual(solution(a), [100, 50]);
    console.log('Test 2: ', solution(a));

    a = [80];
    assert.deepStrictEqual(solution(a), [80, 0]);
    console.log('Test 3: ', solution(a));

    a = [100, 50, 50, 100];
    assert.deepStrictEqual(solution(a), [150, 150]);
    console.log('Test 4: ', solution(a));

    a = [100, 51, 50, 100];
    assert.deepStrictEqual(solution(a), [150, 151]);
    console.log('Test 5: ', solution(a));
}

testSolution();
