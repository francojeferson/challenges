// This is a function called solution that takes three parameters: an inputArray, elemToReplace, and substitutionElem.
// The function uses the map() method to create a new array after applying a function to each element in the inputArray. In this case, taking each element i of the inputArray, the function checks if it is equal to elemToReplace. If it is, the element is replaced with substitutionElem, otherwise it is kept the same.
// The new array with the replaced elements is then returned.

// solution by bintay1
function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(i => i == elemToReplace ? substitutionElem : i);
}

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
