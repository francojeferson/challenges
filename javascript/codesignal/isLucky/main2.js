// This function checks whether an integer given as argument is a Kaprekar number. This means that when the number is divided in half, the sum of the left digits must equal the sum of the right digits. The function splits the number into two parts and calculates the sum of the left and right digits. If the sums are equal, the function returns true, otherwise it returns false.
// Essa função verifica se um número inteiro fornecido como argumento é um número de Kaprekar. Isso significa que, quando o número é dividido ao meio, a soma dos dígitos da esquerda deve ser igual à soma dos dígitos da direita. A função divide o número em duas partes e calcula a soma dos dígitos da esquerda e da direita. Se as somas forem iguais, a função retornará true, caso contrário, retornará false.

function solution(n) {
    let count = 0;
    n = String(n).split('').map(Number);
    const midIndex = Math.floor(n.length / 2);
    for (let i = 0; i < midIndex; i++) {
        count += n[i];
    }
    for (let i = midIndex; i < n.length; i++) {
        count -= n[i];
    }

    return count == 0;
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
