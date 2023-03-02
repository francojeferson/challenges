// This function checks whether a sequence of integers can be transformed into an increasing sequence by adding or removing exactly one element. It does this by checking whether the sequence has two consecutive elements that are equal or decreasing. If it finds two consecutive elements that are equal or decreasing, it checks whether the adjacent elements on the left and right are less than or equal to the element between them. If they are, the function returns true, indicating that the sequence can be made into an increasing sequence. Otherwise, it returns false.
// Esta função verifica se uma sequência de números inteiros pode ser transformada em uma sequência crescente, adicionando ou removendo exatamente um elemento. Ela faz isso verificando se a sequência tem dois elementos consecutivos que são iguais ou decrescentes. Se encontrar dois elementos consecutivos iguais ou decrescentes, ela verifica se os elementos adjacentes à esquerda e à direita são menores ou iguais ao elemento entre eles. Se forem, a função retornará true, indicando que a sequência pode ser transformada em uma sequência crescente. Caso contrário, ela retornará false.

function solution(sequence) {
    let found = false;
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            if (found) {
                return false;
            }

            found = true;

            if (i === 1 || i + 1 === sequence.length) {
                continue;
            } else if (sequence[i] > sequence[i - 2]) {
                sequence[i - 1] = sequence[i - 2];
            } else if (sequence[i - 1] >= sequence[i + 1]) {
                return false;
            }
        }

    }

    return true;
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
