// This function gets two parameters, n and firstNumber. The function returns the value of (firstNumber + n / 2) % n. Basically, this means that the function will return the first number + half of n (divided by n) and then get the remainder of the division (modulo) by n. For example, if you pass 10 as the first number and 15 as the second, it will return 8.5 (10 + 15 / 2 = 8.5). The remainder of the division would be 8, so the output would be 8.
// Essa função recebe dois parâmetros, n e firstNumber. A função retorna o valor de (firstNumber + n / 2) % n. Basicamente, isso significa que a função retornará o primeiro número + metade de n (dividido por n) e então obterá o restante da divisão (modulo) por n. Por exemplo, se você passar 10 como primeiro número e 15 como segundo, ela retornará 8.5 (10 + 15 / 2 = 8.5). O restante da divisão seria 8, então a saída seria 8.

function solution(n, firstNumber) {
    return (firstNumber + n / 2) % n;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
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
}

testSolution();
