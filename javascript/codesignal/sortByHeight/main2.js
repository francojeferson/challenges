// This function takes an array 'a' as parameter. It filters the array elements so that only positive numbers are kept, and then sorts them in ascending order. Next, it maps the original array, replacing any positive number with one of the ordered elements (starting with the smallest) and keeping any negative number as -1. Finally, the function returns the new mapped array.
// Essa função recebe um array 'a' como parâmetro. Ela filtra os elementos do array para que apenas os números positivos sejam mantidos e então os ordena de forma crescente. Em seguida, ela mapeia o array original, substituindo qualquer número positivo por um dos elementos ordenados (começando pelo menor) e mantendo qualquer número negativo como -1. Por fim, a função retorna o novo array mapeado.

function solution(a) {
    let s = a.filter(h => h > 0).sort((a, b) => a - b);
    let i = 0;

    return a.map(p => {
        if (p !== -1) {
            return s[i++];
        }

        return -1;
    });
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
