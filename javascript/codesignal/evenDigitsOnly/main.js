// This function takes a number as argument (n) and returns a boolean value that indicates whether all digits of the number are even or not. First the argument is converted to a string using the toString() method. Next, the Array.from() method is used to create an array of strings from the resulting string. Finally, the function uses the every() method to check whether all elements of the array pass the condition that the remainder of the division by 2 is equal to zero (number % 2 == 0). If all elements pass the condition, the function will return true, otherwise it will return false.
// Essa função recebe um número como argumento (n) e retorna um valor booleano que indica se todos os dígitos do número são pares ou não. Primeiro, o argumento é convertido em uma string usando o método toString(). Em seguida, usa-se o método Array.from() para criar um array de strings a partir da string resultante. Por fim, a função usa o método every() para verificar se todos os elementos do array passam na condição de que o resto da divisão por 2 é igual a zero (number % 2 === 0). Se todos os elementos passarem na condição, a função retornará true, caso contrário retornará false.

function solution(n) {
    return Array.from(n.toString()).every(number => number % 2 === 0);
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let n = 248622;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 1: ', solution(n));

    n = 642386;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 2: ', solution(n));

    n = 248842;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 3: ', solution(n));

    n = 1;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 4: ', solution(n));

    n = 8;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 5: ', solution(n));

    n = 2462487;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 6: ', solution(n));

    n = 468402800;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 7: ', solution(n));

    n = 2468428;
    assert.deepStrictEqual(solution(n), true);
    console.log('Test 8: ', solution(n));

    n = 5468428;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 9: ', solution(n));

    n = 7468428;
    assert.deepStrictEqual(solution(n), false);
    console.log('Test 10: ', solution(n));
}

testSolution();
