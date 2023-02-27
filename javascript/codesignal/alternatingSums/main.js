// This function takes an array 'a' as parameter and returns an array containing the sum of odd and even numbers. First, the variables even and odd are set to 0. Then, the for loop is used to iterate over each element of the array 'a'. If the index is even, the value is added to the variable even, otherwise it is added to the variable odd. Finally, the function returns an array containing the sum of even and odd numbers.
// Esta função recebe um array 'a' como parâmetro e retorna um array contendo a soma dos números pares e ímpares. Primeiro, as variáveis ​​even e odd são definidas como 0. Em seguida, o loop for é usado para iterar sobre cada elemento do array 'a'. Se o índice for par, o valor é adicionado à variável even; caso contrário, é adicionado à variável odd. Finalmente, a função retorna um array contendo a soma dos números pares e ímpares.

function solution(a) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            even += a[i];
        } else {
            odd += a[i];
        }
    }
    return [even, odd];
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let a = [50, 60, 60, 45, 70];
    assert.deepStrictEqual(solution(a), [180, 105]);
    console.log('Test 1: ', solution(a));

    a = [100, 50];
    assert.deepStrictEqual(solution(a), [100, 50]);
    console.log('Test 2: ', solution(a));

    a = [80];
    assert.deepStrictEqual(solution(a), [80, 0]);
    console.log('Test 3: ', solution(a));

    a = [100, 50, 50, 100];
    assert.deepStrictEqual(solution(a), [150, 150]);
    console.log('Test 4: ', solution(a));

    a = [100, 51, 50, 100];
    assert.deepStrictEqual(solution(a), [150, 151]);
    console.log('Test 5: ', solution(a));
}

testSolution();
