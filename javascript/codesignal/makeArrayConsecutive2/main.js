// This function takes an array of integers as a parameter and returns the number of missing statues between the smallest and largest number in the array. First, the function calculates the minimum and maximum value of the array using Math.min() and Math.max(). Next, it initializes a variable "count" to count the missing statues. The variable "i" is initialized with the minimum value of the array. The function then checks if each number between the minimum and maximum value is present in the array using includes(). If a number is missing, "count" is incremented by 1. When all numbers between the minimum and maximum value have been checked, the function returns the value of "count".
// Esta função recebe um array de números inteiros como parâmetro e retorna o número de estátuas ausentes entre o menor e o maior número no array. Primeiro, a função calcula o valor mínimo e máximo do array usando Math.min() e Math.max(). Em seguida, ela inicializa uma variável "count" para contar as estátuas ausentes. A variável "i" é inicializada com o valor mínimo do array. A função então verifica se cada número entre o valor mínimo e máximo está presente no array usando includes(). Se um número estiver ausente, "count" é incrementado em 1. Quando todos os números entre o valor mínimo e máximo forem verificados, a função retorna o valor de "count".

function solution(statues) {
    let min = Math.min(...statues);
    let max = Math.max(...statues);
    let count = 0;
    let i = min;

    while (i <= max) {
        if (!statues.includes(i)) {
            count++;
        }

        i++;
    }

    return count;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let statues = [6, 2, 3, 8];
    assert.deepStrictEqual(solution(statues), 3);
    console.log('Test 1: ', solution(statues));

    statues = [0, 3];
    assert.deepStrictEqual(solution(statues), 2);
    console.log('Test 2: ', solution(statues));

    statues = [5, 4, 6];
    assert.deepStrictEqual(solution(statues), 0);
    console.log('Test 3: ', solution(statues));

    statues = [6, 3];
    assert.deepStrictEqual(solution(statues), 2);
    console.log('Test 4: ', solution(statues));

    statues = [1];
    assert.deepStrictEqual(solution(statues), 0);
    console.log('Test 5: ', solution(statues));
}

testSolution();
