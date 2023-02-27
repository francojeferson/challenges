// This function receives two parameters, "a" and "b", which are both arrays of strings. First the function filters both vectors and compares their values for each index. Those values that are not equal are stored in separate variables called "ad" and "bd". Next, the function checks whether the variable "ad" contains 0 elements or if it contains two elements and these elements are in reverse order with respect to the variable "bd". If one of these conditions is met, the function returns true as the final result of the operation.
// Essa função recebe dois parâmetros, "a" e "b", que são ambos vetores de strings. Primeiro, a função filtra ambos vetores e compara seus valores para cada índice. Aqueles valores que não são iguais são armazenados em variáveis separadas chamadas "ad" e "bd". Em seguida, a função verifica se a variável "ad" contém 0 elementos ou se contém dois elementos e esses elementos estão em ordem inversa em relação à variável "bd". Se uma dessas condições for atendida, a função retornará true como resultado final da operação.

function solution(a, b) {
    const ad = a.filter((v, i) => v != b[i]);
    const bd = b.filter((v, i) => v != a[i]);

    return (ad.length == 0 || (ad.length == 2 && ad.join('') === bd.reverse().join('')));
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let a = [1, 2, 3];
    let b = [1, 2, 3];
    assert.deepStrictEqual(solution(a, b), true);
    console.log('Test 1: ', solution(a, b));

    a = [1, 2, 3];
    b = [2, 1, 3];
    assert.deepStrictEqual(solution(a, b), true);
    console.log('Test 2: ', solution(a, b));

    a = [1, 2, 2];
    b = [2, 1, 1];
    assert.deepStrictEqual(solution(a, b), false);
    console.log('Test 3: ', solution(a, b));

    a = [1, 2, 1, 2];
    b = [2, 2, 1, 1];
    assert.deepStrictEqual(solution(a, b), true);
    console.log('Test 4: ', solution(a, b));

    a = [1, 2, 1, 2, 2, 1];
    b = [2, 2, 1, 1, 2, 1];
    assert.deepStrictEqual(solution(a, b), true);
    console.log('Test 5: ', solution(a, b));

    a = [1, 1, 4];
    b = [1, 2, 3];
    assert.deepStrictEqual(solution(a, b), false);
    console.log('Test 6: ', solution(a, b));

    a = [1, 2, 3];
    b = [1, 10, 2];
    assert.deepStrictEqual(solution(a, b), false);
    console.log('Test 7: ', solution(a, b));

    a = [2, 3, 1];
    b = [1, 3, 2];
    assert.deepStrictEqual(solution(a, b), true);
    console.log('Test 8: ', solution(a, b));

    a = [2, 3, 9];
    b = [10, 3, 2];
    assert.deepStrictEqual(solution(a, b), false);
    console.log('Test 9: ', solution(a, b));

    a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
    b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];
    assert.deepStrictEqual(solution(a, b), false);
    console.log('Test 10: ', solution(a, b));
}

testSolution();
