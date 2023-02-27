// This function compares whether two people have the same dominant hand. The parameters yourLeft and yourRight represent the left and right hand of the user, while friendsLeft and friendsRight represent the left and right hand of a friend. The function compares whether these parameters are equal, returning either true or false depending on the result of the comparison. By sorting each set, it becomes possible to compare them correctly.
// Essa função compara se duas pessoas possuem a mesma mão dominante. Os parâmetros yourLeft e yourRight representam a mão esquerda e direita do usuário, enquanto que friendsLeft e friendsRight representam a mão esquerda e direita de um amigo. A função compara se esses parâmetros são iguais, retornando se é verdadeiro ou falso, dependendo do resultado da comparação. Ao ordenar cada conjunto, torna-se possível compará-los corretamente.

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    return [yourLeft, yourRight].sort().join("") === [friendsLeft, friendsRight].sort().join("");
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let yourLeft = 10;
    let yourRight = 15;
    let friendsLeft = 15;
    let friendsRight = 10;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
    console.log('Test 1: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 15;
    yourRight = 10;
    friendsLeft = 15;
    friendsRight = 10;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
    console.log('Test 2: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 15;
    yourRight = 10;
    friendsLeft = 15;
    friendsRight = 9;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), false);
    console.log('Test 3: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 10;
    yourRight = 5;
    friendsLeft = 5;
    friendsRight = 10;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
    console.log('Test 4: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 10;
    yourRight = 15;
    friendsLeft = 5;
    friendsRight = 20;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), false);
    console.log('Test 5: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 10;
    yourRight = 20;
    friendsLeft = 10;
    friendsRight = 20;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
    console.log('Test 6: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 5;
    yourRight = 20;
    friendsLeft = 20;
    friendsRight = 5;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
    console.log('Test 7: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 20;
    yourRight = 15;
    friendsLeft = 5;
    friendsRight = 20;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), false);
    console.log('Test 8: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 5;
    yourRight = 10;
    friendsLeft = 5;
    friendsRight = 10;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
    console.log('Test 9: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 1;
    yourRight = 10;
    friendsLeft = 10;
    friendsRight = 0;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), false);
    console.log('Test 10: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 5;
    yourRight = 5;
    friendsLeft = 10;
    friendsRight = 10;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), false);
    console.log('Test 11: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 10;
    yourRight = 5;
    friendsLeft = 10;
    friendsRight = 6;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), false);
    console.log('Test 12: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 1;
    yourRight = 1;
    friendsLeft = 1;
    friendsRight = 1;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
    console.log('Test 13: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));

    yourLeft = 0;
    yourRight = 10;
    friendsLeft = 10;
    friendsRight = 0;
    assert.deepStrictEqual(solution(yourLeft, yourRight, friendsLeft, friendsRight), true);
    console.log('Test 14: ', solution(yourLeft, yourRight, friendsLeft, friendsRight));
}

testSolution();
