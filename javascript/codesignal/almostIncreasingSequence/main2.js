// This function checks whether a sequence of numbers is in ascending or descending order. It starts by counting the number of times a number is less than the previous number. If this number is greater than 1, the function returns false, because this means that the sequence is not in ascending or descending order. If it is equal to 1, it returns true, because this means that the sequence is in ascending or descending order.
// Esta função verifica se uma sequência de números está em ordem crescente ou decrescente. Ela começa contando o número de vezes que um número é menor que o anterior. Se esse número for maior que 1, a função retornará false, pois isso significa que a sequência não está em ordem crescente ou decrescente. Se for igual a 1, ela retornará true, pois isso significa que a sequência está em ordem crescente ou decrescente.

function solution(sequence) {
    let count = 0;

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;

            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;

        }
    }

    return count <= 1;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let sequence = [1, 3, 2, 1];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 1: ', solution(sequence));

    sequence = [1, 3, 2];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 2: ', solution(sequence));

    sequence = [1, 2, 1, 2];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 3: ', solution(sequence));

    sequence = [3, 6, 5, 8, 10, 20, 15];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 4: ', solution(sequence));

    sequence = [1, 1, 2, 3, 4, 4];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 5: ', solution(sequence));

    sequence = [1, 4, 10, 4, 2];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 6: ', solution(sequence));

    sequence = [10, 1, 2, 3, 4, 5];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 7: ', solution(sequence));

    sequence = [1, 1, 1, 2, 3];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 8: ', solution(sequence));

    sequence = [0, -2, 5, 6];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 9: ', solution(sequence));

    sequence = [1, 2, 3, 4, 5, 3, 5, 6];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 10: ', solution(sequence));

    sequence = [40, 50, 60, 10, 20, 30];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 11: ', solution(sequence));

    sequence = [1, 1];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 12: ', solution(sequence));

    sequence = [1, 2, 5, 3, 5];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 13: ', solution(sequence));

    sequence = [1, 2, 5, 5, 5];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 14: ', solution(sequence));

    sequence = [10, 1, 2, 3, 4, 5, 6, 1];
    assert.deepStrictEqual(solution(sequence), false);
    console.log('Test 15: ', solution(sequence));

    sequence = [1, 2, 3, 4, 3, 6];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 16: ', solution(sequence));

    sequence = [1, 2, 3, 4, 99, 5, 6];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 17: ', solution(sequence));

    sequence = [123, -17, -5, 1, 2, 3, 12, 43, 45];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 18: ', solution(sequence));

    sequence = [3, 5, 67, 98, 3];
    assert.deepStrictEqual(solution(sequence), true);
    console.log('Test 19: ', solution(sequence));
}

testSolution();
