// This code defines a function called "solution" that takes in two arguments - "n" and "firstNumber". The function returns the modulo of the sum of "firstNumber" and "n" divided by 2 in relation to the value of "n".
// With this code, for a given sequence length of "n" with first item "firstNumber", the function calculates the index of the reflection of the item back to the top front of the list.

function solution(n, firstNumber) {
    return (firstNumber + n / 2) % n;
}

const assert = require('assert');
function testSolution() {
    try {
        let n = 10;
        let firstNumber = 2;
        assert.deepStrictEqual(solution(n, firstNumber), 7);
        console.log('Test 1: ', solution(n, firstNumber));

        n = 10;
        firstNumber = 7;
        assert.deepStrictEqual(solution(n, firstNumber), 2);
        console.log('Test 2: ', solution(n, firstNumber));

        n = 4;
        firstNumber = 1;
        assert.deepStrictEqual(solution(n, firstNumber), 3);
        console.log('Test 3: ', solution(n, firstNumber));

        n = 6;
        firstNumber = 3;
        assert.deepStrictEqual(solution(n, firstNumber), 0);
        console.log('Test 4: ', solution(n, firstNumber));

        n = 18;
        firstNumber = 6;
        assert.deepStrictEqual(solution(n, firstNumber), 15);
        console.log('Test 5: ', solution(n, firstNumber));

        n = 12;
        firstNumber = 10;
        assert.deepStrictEqual(solution(n, firstNumber), 4);
        console.log('Test 6: ', solution(n, firstNumber));

        n = 18;
        firstNumber = 5;
        assert.deepStrictEqual(solution(n, firstNumber), 14);
        console.log('Test 7: ', solution(n, firstNumber));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
