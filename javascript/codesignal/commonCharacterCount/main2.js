// This function compares two strings (s1 and s2) and counts how many characters from s1 are present in s2. The for loop goes through each character of s1 and checks if it is present in s2 using the includes method. If the character is present, the count variable is incremented and the character is removed from the string s2 using the replace method. At the end of the loop, the function returns the value of count.
// Essa função compara duas strings (s1 e s2) e conta quantos caracteres de s1 estão presentes em s2. O loop for percorre cada caractere de s1 e verifica se ele está presente em s2 usando o método includes. Se o caractere estiver presente, a variável count é incrementada e o caractere é removido da string s2 usando o método replace. Ao final do loop, a função retorna o valor de count.

function solution(s1, s2) {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            count++;
            s2 = s2.replace(s1[i], "");
        }
    }

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
