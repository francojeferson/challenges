// This function checks whether the sum of the digits of the first half of a number is equal to the sum of the digits of the second half. First, the function converts the number into a string and determines the length of the half. Then it iterates over each half and calculates the sum of the digits. Finally, it returns true if the two sums are equal and false otherwise.
// Esta função verifica se a soma dos dígitos da primeira metade de um número é igual à soma dos dígitos da segunda metade. Primeiro, a função converte o número em uma string e determina o comprimento da metade. Em seguida, ela itera sobre cada metade e calcula a soma dos dígitos. Por último, ela retorna true se as duas somas forem iguais e false caso contrário.

function solution(n) {
    let str = n.toString();
    let halfLength = str.length / 2;
    let firstHalfSum = 0;
    let secondHalfSum = 0;

    for (let i = 0; i < halfLength; i++) {
        firstHalfSum += parseInt(str[i]);
        secondHalfSum += parseInt(str[halfLength + i]);
    }

    return firstHalfSum === secondHalfSum;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let n = 1230;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 1: ', solution(n));

    n = 239017;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 2: ', solution(n));

    n = 134008;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 3: ', solution(n));

    n = 10;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 4: ', false);

    n = 11;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 5: ', solution(n));

    n = 1010;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 6: ', solution(n));

    n = 261534;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 7: ', solution(n));

    n = 100000;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 8: ', solution(n));

    n = 999999;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 9: ', solution(n));

    n = 123321;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 10: ', solution(n));
}

testSolution();
