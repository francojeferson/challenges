// This function takes a string as parameter and checks if it is a palindrome. It creates a variable to store the inverted string, then uses a loop to loop the original string backwards, adding each character to the variable. Finally, it compares the original string with the inverted string and returns true if they are equal or false otherwise.
// Essa função recebe uma string como parâmetro e verifica se ela é um palíndromo. Ela cria uma variável para armazenar a string invertida e, em seguida, usa um loop para percorrer a string original de trás para frente, adicionando cada caractere à variável. Por fim, ela compara a string original com a invertida e retorna true se forem iguais ou false caso contrário.

function solution(inputString) {
    let reversedInputString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedInputString += inputString[i];
    }

    return inputString === reversedInputString;
}

// Test 1: true Test 2: false Test 3: true Test 4: false Test 5: true Test 6: true Test 7: false Test 8: false Test 9: true Test 10: true What happened at execution was that the code was compiled and executed successfully, testing 10 different inputs and displaying the results of each test.
// Test 1: true Test 2: false Test 3: true Test 4: false Test 5: true Test 6: true Test 7: false Test 8: false Test 9: true Test 10: true O que aconteceu na execução foi que o código foi compilado e executado com sucesso, testando 10 entradas diferentes e exibindo os resultados de cada teste.

const assert = require('assert');
function testSolution() {
    let inputString = "aabaa";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 1: ', solution(inputString));

    inputString = "abac";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 2: ', solution(inputString));

    inputString = "a";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 3: ', solution(inputString));

    inputString = "az";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 4: ', solution(inputString));

    inputString = "abacaba";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 5: ', solution(inputString));

    inputString = "z";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 6: ', solution(inputString));

    inputString = "aaabaaaa";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 7: ', solution(inputString));

    inputString = "zzzazzazz";
    assert.deepStrictEqual(solution(inputString), false);
    console.log('Test 8: ', solution(inputString));

    inputString = "hlbeeykoqqqqokyeeblh";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 9: ', solution(inputString));

    inputString = "hlbeeykoqqqokyeeblh";
    assert.deepStrictEqual(solution(inputString), true);
    console.log('Test 10: ', solution(inputString));
}

testSolution();
