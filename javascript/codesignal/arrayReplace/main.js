// This function takes as arguments an input array, an element to replace, and a replacement element. It returns the input array with any instance of the specified element replaced by the replacement element. For example, if the array is [1,2,3], the element to replace is 2, and the replacement element is 4, then the function will return [1,4,3].
// Esta função recebe como argumentos um array de entrada, um elemento para substituir e um elemento de substituição. Ela retorna o array de entrada com qualquer instância do elemento especificado substituída pelo elemento de substituição. Por exemplo, se o array for [1,2,3], o elemento a ser substituído for 2 e o elemento de substituição for 4, então a função retornará [1,4,3].

function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(item => (item === elemToReplace) ? substitutionElem : item);
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
