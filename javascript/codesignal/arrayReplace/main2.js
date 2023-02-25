// This function takes three arguments as input: an input array, the element to be replaced, and the replacement element. It traverses the input array and, when it finds the element to be replaced, it replaces it with the replacement element. Finally, it returns the modified input array.
// Esta função recebe três argumentos como entrada: um array de entrada, o elemento a ser substituído e o elemento de substituição. Ela percorre o array de entrada e, quando encontra o elemento a ser substituído, ele o substitui pelo elemento de substituição. Finalmente, ela retorna o array de entrada modificado.

function solution(inputArray, elemToReplace, substitutionElem) {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) inputArray[i] = substitutionElem;
    }
    return inputArray;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputArray = [1, 2, 1];
    let elemToReplace = 1;
    let substitutionElem = 3;
    assert.deepStrictEqual(solution(inputArray, elemToReplace, substitutionElem), [3, 2, 3]);
    console.log('Test 1: ', solution(inputArray, elemToReplace, substitutionElem));

    inputArray = [1, 2, 3, 4, 5];
    elemToReplace = 3;
    substitutionElem = 0;
    assert.deepStrictEqual(solution(inputArray, elemToReplace, substitutionElem), [1, 2, 0, 4, 5]);
    console.log('Test 2: ', solution(inputArray, elemToReplace, substitutionElem));

    inputArray = [1, 1, 1];
    elemToReplace = 1;
    substitutionElem = 10;
    assert.deepStrictEqual(solution(inputArray, elemToReplace, substitutionElem), [10, 10, 10]);
    console.log('Test 3: ', solution(inputArray, elemToReplace, substitutionElem));

    inputArray = [1, 2, 1, 2, 1];
    elemToReplace = 2;
    substitutionElem = 1;
    assert.deepStrictEqual(solution(inputArray, elemToReplace, substitutionElem), [1, 1, 1, 1, 1]);
    console.log('Test 4: ', solution(inputArray, elemToReplace, substitutionElem));

    inputArray = [1, 2, 1, 2, 1];
    elemToReplace = 2;
    substitutionElem = 2;
    assert.deepStrictEqual(solution(inputArray, elemToReplace, substitutionElem), [1, 2, 1, 2, 1]);
    console.log('Test 5: ', solution(inputArray, elemToReplace, substitutionElem));

    inputArray = [3, 1];
    elemToReplace = 3;
    substitutionElem = 9;
    assert.deepStrictEqual(solution(inputArray, elemToReplace, substitutionElem), [9, 1]);
    console.log('Test 6: ', solution(inputArray, elemToReplace, substitutionElem));

    inputArray = [10, 10];
    elemToReplace = 0;
    substitutionElem = 9;
    assert.deepStrictEqual(solution(inputArray, elemToReplace, substitutionElem), [10, 10]);
    console.log('Test 7: ', solution(inputArray, elemToReplace, substitutionElem));

    inputArray = [2, 1];
    elemToReplace = 3;
    substitutionElem = 9;
    assert.deepStrictEqual(solution(inputArray, elemToReplace, substitutionElem), [2, 1]);
    console.log('Test 8: ', solution(inputArray, elemToReplace, substitutionElem));
}

testSolution();
