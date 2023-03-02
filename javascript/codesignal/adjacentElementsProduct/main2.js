// This function takes an array of numbers as input and returns the greatest product of two consecutive numbers in the array. First, the variable prod is set to the product of the first two elements of the array. Next, a for loop is used to loop through the remainder of the array. At each iteration, the largest value between prod and the product of the current consecutive numbers is stored in the variable prod. When all elements have been traversed, the function returns the value of the variable prod, which contains the largest product of two consecutive numbers in the array.
// Esta função recebe um array de números como entrada e retorna o maior produto de dois números consecutivos no array. Primeiro, a variável prod é definida como o produto dos dois primeiros elementos do array. Em seguida, um loop for é usado para percorrer o restante do array. A cada iteração, o maior valor entre prod e o produto dos números consecutivos atuais é armazenado na variável prod. Quando todos os elementos são percorridos, a função retorna o valor da variável prod, que contém o maior produto de dois números consecutivos no array.

function solution(inputArray) {
    let prod = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        prod = Math.max(prod, inputArray[i] * inputArray[i + 1]);
    }

    return prod;
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
