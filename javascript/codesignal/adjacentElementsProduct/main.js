// This function takes an array as parameter and returns the greatest product of two consecutive numbers within the array. First, the array is slice to delete the last element using the slice method. Next, the map method is used to multiply each element with its immediate successor. Finally, the function Math.max returns the largest value from the resulting list.
// Essa função recebe um array como parâmetro e retorna o maior produto de dois números consecutivos dentro do array. Primeiro, o array é cortado para excluir o último elemento usando o método slice. Em seguida, o método map é usado para multiplicar cada elemento com seu sucessor imediato. Por fim, a função Math.max retorna o maior valor da lista resultante.

function solution(inputArray) {
    return Math.max(...inputArray.slice(0, -1).map((n, i) => n * inputArray[i + 1]));
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputArray = [3, 6, -2, -5, 7, 3];
    assert.deepStrictEqual(solution(inputArray), 21);
    console.log('Test 1: ', solution(inputArray));

    inputArray = [-1, -2];
    assert.deepStrictEqual(solution(inputArray), 2);
    console.log('Test 2: ', solution(inputArray));

    inputArray = [5, 1, 2, 3, 1, 4];
    assert.deepStrictEqual(solution(inputArray), 6);
    console.log('Test 3: ', solution(inputArray));

    inputArray = [1, 2, 3, 0];
    assert.deepStrictEqual(solution(inputArray), 6);
    console.log('Test 4: ', solution(inputArray));

    inputArray = [9, 5, 10, 2, 24, -1, -48];
    assert.deepStrictEqual(solution(inputArray), 50);
    console.log('Test 5: ', solution(inputArray));

    inputArray = [5, 6, -4, 2, 3, 2, -23];
    assert.deepStrictEqual(solution(inputArray), 30);
    console.log('Test 6: ', solution(inputArray));

    inputArray = [4, 1, 2, 3, 1, 5];
    assert.deepStrictEqual(solution(inputArray), 6);
    console.log('Test 7: ', solution(inputArray));

    inputArray = [-23, 4, -3, 8, -12];
    assert.deepStrictEqual(solution(inputArray), -12);
    console.log('Test 8: ', solution(inputArray));

    inputArray = [1, 0, 1, 0, 1000];
    assert.deepStrictEqual(solution(inputArray), 0);
    console.log('Test 9: ', solution(inputArray));
}

testSolution();
