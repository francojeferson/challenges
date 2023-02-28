// This function takes an array 'a' as argument. It filters the array by removing all -1 numbers, and then sorts the remaining numbers in ascending order. Next, the function maps the original array, replacing the -1 numbers with the ordered numbers from the filtered array. Finally, the function returns the new mapped array.
// Essa função recebe um array 'a' como argumento. Ela filtra o array removendo todos os números -1 e, em seguida, ordena os números restantes em ordem crescente. Em seguida, a função mapeia o array original, substituindo os números -1 pelos números ordenados do array filtrado. Por fim, a função retorna o novo array mapeado.

function solution(a) {
    const sortedA = a.filter(num => num !== -1).sort((a, b) => a - b);
    let sortedAIndex = 0;

    return a.map(num => num === -1 ? num : sortedA[sortedAIndex++]);
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let a = [-1, 150, 190, 170, -1, -1, 160, 180];
    assert.deepStrictEqual(solution(a), [-1, 150, 160, 170, -1, -1, 180, 190]);
    console.log('Test 1: ', solution(a));

    a = [-1, -1, -1, -1, -1];
    assert.deepStrictEqual(solution(a), [-1, -1, -1, -1, -1]);
    console.log('Test 2: ', solution(a));

    a = [-1];
    assert.deepStrictEqual(solution(a), [-1]);
    console.log('Test 3: ', solution(a));

    a = [4, 2, 9, 11, 2, 16];
    assert.deepStrictEqual(solution(a), [2, 2, 4, 9, 11, 16]);
    console.log('Test 4: ', solution(a));

    a = [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1];
    assert.deepStrictEqual(solution(a), [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]);
    console.log('Test 5: ', solution(a));

    a = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3];
    assert.deepStrictEqual(solution(a), [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]);
    console.log('Test 6: ', solution(a));
}

testSolution();
