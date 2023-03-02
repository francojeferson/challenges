// This function calculates how many numbers are missing to complete a sequence. It takes a sequence as parameter and uses the Math.max() function to find the largest number in the sequence and the Math.min() function to find the smallest number in the sequence. It then returns the result of the subtraction between the largest and smallest number in the sequence, added to 1, and subtracted by the number of elements in the sequence.
// Essa função calcula a quantidade de números que faltam para completar uma sequência. Ela recebe como parâmetro uma sequência e usa a função Math.max() para encontrar o maior número da sequência e a função Math.min() para encontrar o menor número da sequência. Em seguida, ela retorna o resultado da subtração entre o maior e o menor número da sequência, somado a 1, e subtraído pela quantidade de elementos da sequência.

function solution(sequence) {
    let max = Math.max(...sequence);
    let min = Math.min(...sequence);
    return max - min + 1 - sequence.length;
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
