// This code checks if a given number is divisible by 10 and contains only even digits. If the number is 0, it returns true. Otherwise, the function divides the number by 10 and checks if the remainder of the division by 2 is 0. If it is not, it returns false. If it is, it divides the number by 10 and rounds down to continue the check. If all operations are completed successfully, the function returns true.
// Este código verifica se um determinado número é divisível por 10 e contém apenas dígitos pares. Se o número for 0, retornará true. Caso contrário, a função divide o número por 10 e verifica se o restante da divisão por 2 é 0. Se não for, retorna false. Se for, divide o número por 10 e arredonda para baixo para continuar a verificação. Se todas as operações forem concluídas com sucesso, a função retornará true.

function solution(n) {
    // Returns true if number is 0
    // Retorna verdadeiro se o número for 0
    if (n === 0) return true;

    // Check if the number is divisible by 10
    // Verifica se o número é divisível por 10
    while (n % 10 === 0) {
        n /= 10;
    }

    while (n > 0) {
        // If the remainder of the division by 2 is not 0, returns false
        // Se o resto da divisão por 2 não for 0, retorna falso
        if (n % 2 !== 0) return false;
        // Divides the number by 10 and rounds down
        // Divide o número por 10 e arredonda para baixo
        n = Math.floor(n / 10);
    }

    // Returns true if all operations are checked successfully
    // Retorna verdadeiro se todas as operações forem verificadas com sucesso
    return true;
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
