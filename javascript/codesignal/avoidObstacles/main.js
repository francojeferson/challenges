// This function determines the smallest positive integer (known as the least common multiple, or LCM) that is divisible by each of the numbers in an input array. The function uses a while loop to iterate through all possible numbers until it finds one that is divisible by each element in the array.
// Essa função determina o menor número inteiro positivo (conhecido como o menor múltiplo comum, ou LCM) que é divisível por cada um dos números em um array de entrada. A função usa um loop while para iterar através de todos os números possíveis até encontrar um que é divisível por cada elemento no array.

function solution(inputArray) {
    let i = 1;
    while (true) {
        if (inputArray.every(element => element % i !== 0)) {
            return i;
        }
        i++;
    }
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputArray = [5, 3, 6, 7, 9];
    assert.deepStrictEqual(solution(inputArray), 4);
    console.log('Test 1: ', solution(inputArray));

    inputArray = [2, 3];
    assert.deepStrictEqual(solution(inputArray), 4);
    console.log('Test 2: ', solution(inputArray));

    inputArray = [1, 4, 10, 6, 2];
    assert.deepStrictEqual(solution(inputArray), 7);
    console.log('Test 3: ', solution(inputArray));

    inputArray = [1000, 999];
    assert.deepStrictEqual(solution(inputArray), 6);
    console.log('Test 4: ', solution(inputArray));

    inputArray = [19, 32, 11, 23];
    assert.deepStrictEqual(solution(inputArray), 3);
    console.log('Test 5: ', solution(inputArray));

    inputArray = [5, 8, 9, 13, 14];
    assert.deepStrictEqual(solution(inputArray), 6);
    console.log('Test 6: ', solution(inputArray));
}

testSolution();
