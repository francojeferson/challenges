// This function compares two strings (s1 and s2) and returns the number of characters they have in common. First, the variable 'count' is set to 0. Then, the strings are split into character arrays using the 'split' method. The 'forEach' method is used to iterate over the characters in the first string (s1). If the array of the second string (s2) includes a character from the array of the first string, the 'count' variable is incremented and that character is removed from the array of the second string using the 'splice' method. Finally, the function returns the value of 'count'.
// Esta função compara duas strings (s1 e s2) e retorna o número de caracteres que elas têm em comum. Primeiro, a variável 'count' é definida como 0. Em seguida, as strings são divididas em arrays de caracteres usando o método 'split'. O método 'forEach' é usado para iterar sobre os caracteres da primeira string (s1). Se o array da segunda string (s2) incluir um caractere do array da primeira string, a variável 'count' é incrementada e esse caractere é removido do array da segunda string usando o método 'splice'. Por fim, a função retorna o valor de 'count'.

function solution(s1, s2) {
    let count = 0;
    s1 = s1.split('');
    s2 = s2.split('');
    s1.forEach((e) => {
        if (s2.includes(e)) {
            count++;
            s2.splice(s2.indexOf(e), 1);
        }
    });
    return count;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let s1 = "aabcc";
    let s2 = "adcaa";
    assert.deepStrictEqual(solution(s1, s2), 3);
    console.log('Test 1: ', solution(s1, s2));

    s1 = "zzzz";
    s2 = "zzzzzzz";
    assert.deepStrictEqual(solution(s1, s2), 4);
    console.log('Test 2: ', solution(s1, s2));

    s1 = "abca";
    s2 = "xyzbac";
    assert.deepStrictEqual(solution(s1, s2), 3);
    console.log('Test 3: ', solution(s1, s2));

    s1 = "a";
    s2 = "b";
    assert.deepStrictEqual(solution(s1, s2), 0);
    console.log('Test 4: ', solution(s1, s2));

    s1 = "a";
    s2 = "aaa";
    assert.deepStrictEqual(solution(s1, s2), 1);
    console.log('Test 5: ', solution(s1, s2));
}

testSolution();
