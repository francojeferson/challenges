// This function takes two arrays, a and b, and compares their elements to determine if they are equal. First it checks to see if the arrays are equal when converted to strings. If they are not, then it creates two new arrays (array1 and array2) where it will add the different elements between a and b. Finally, it compares the contents of the inverted arrays array1 and array2 to determine whether they are equal or not. If they are equal, the function returns true; otherwise, it returns false.
// Essa função recebe dois arrays, a e b, e compara os seus elementos para determinar se são iguais. Primeiro, verifica se os arrays são iguais quando convertidos para strings. Se não forem, então cria dois novos arrays (array1 e array2) onde vai adicionar os elementos diferentes entre a e b. Por fim, compara os conteúdos dos arrays array1 e array2 invertidos para determinar se são iguais ou não. Se forem iguais, a função retorna true; caso contrário, retorna false.

function solution(a, b) {
    if (a.join('') === b.join('')) return true;
    let array1 = [];
    let array2 = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            array1.push(a[i]);
            array2.push(b[i]);
        }
    }

    return array1.toString() === array2.reverse().toString();
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
