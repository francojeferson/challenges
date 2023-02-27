// This function checks if the pairs of shoes of the user and the friend are equal. It compares the user's left shoe (yourLeft) with the friend's left shoe (friendsLeft) and, if they are equal, it compares the user's right shoe (yourRight) with the friend's right shoe (friendsRight). If the shoes are not equal, it compares the user's left shoe (yourLeft) with the friend's right shoe (friendsRight) and then compares the user's right shoe (yourRight) with the friend's left shoe (friendsLeft). If all comparisons are true, the function returns true, otherwise it returns false.
// Essa função verifica se os pares de sapatos do usuário e do amigo são iguais. Ela compara o sapato esquerdo do usuário (yourLeft) com o sapato esquerdo do amigo (friendsLeft) e, se forem iguais, compara o sapato direito do usuário (yourRight) com o sapato direito do amigo (friendsRight). Se os sapatos não forem iguais, ela compara o sapato esquerdo do usuário (yourLeft) com o sapato direito do amigo (friendsRight) e, em seguida, compara o sapato direito do usuário (yourRight) com o sapato esquerdo do amigo (friendsLeft). Se todas as comparações forem verdadeiras, a função retorna true, caso contrário retorna false.

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    return yourLeft === friendsLeft ? yourRight === friendsRight : yourLeft === friendsRight && yourRight === friendsLeft;
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
