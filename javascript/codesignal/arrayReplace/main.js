// This code defines a function called solution that takes three parameters:

// inputArray: an array of values
// elemToReplace: a value that needs to be replaced
// substitutionElem: the value that will replace elemToReplace in the resulting array

// The function uses the map() method to loop through each item in inputArray and perform the following actions:

// If the current item in the array is equal to elemToReplace, replace it with substitutionElem
// Otherwise, return the item as is

// Finally, the function returns a new array that contains the modified values or unchanged values of inputArray elements depending on whether they matched with elemToReplace or not.

function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map((item) => {
        if (item === elemToReplace) {
            return substitutionElem;
        }
        return item;
    });
}

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
