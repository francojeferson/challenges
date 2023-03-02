// This code is a function that takes two parameters (param1 and param2) and returns the sum of the two. The variable "solution" stores the function that performs this operation.
// Esse código é uma função que recebe dois parâmetros (param1 e param2) e retorna a soma dos dois. A variável "solution" armazena a função que realiza essa operação.

const solution = (param1, param2) => param1 + param2;

// There were no errors. The code was compiled and executed. The testSolution() function was called and parameters were passed to the solution() function. The results were compared with the assert.deepStrictEqual() method and printed to the screen using console.log().
// Não houve erros. O código foi compilado e executado. A função testSolution() foi chamada e os parâmetros foram passados para a função solution(). Os resultados foram comparados com o método assert.deepStrictEqual() e imprimidos na tela usando o console.log().

const assert = require('assert');
function testSolution() {
    let param1 = 1;
    let param2 = 2;
    assert.deepStrictEqual(solution(param1, param2), 3);
    console.log('Test 1: ', solution(param1, param2));

    param1 = 0;
    param2 = 1000;
    assert.deepStrictEqual(solution(param1, param2), 1000);
    console.log('Test 2: ', solution(param1, param2));

    param1 = 2;
    param2 = -39;
    assert.deepStrictEqual(solution(param1, param2), -37);
    console.log('Test 3: ', solution(param1, param2));

    param1 = 99;
    param2 = 100;
    assert.deepStrictEqual(solution(param1, param2), 199);
    console.log('Test 4: ', solution(param1, param2));

    param1 = -100;
    param2 = 100;
    assert.deepStrictEqual(solution(param1, param2), 0);
    console.log('Test 5: ', solution(param1, param2));

    param1 = -1000;
    param2 = -1000;
    assert.deepStrictEqual(solution(param1, param2), -2000);
    console.log('Test 6: ', solution(param1, param2));
}

testSolution();
