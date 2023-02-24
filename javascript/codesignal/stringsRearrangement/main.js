// This code checks for a sequence of words in the array "a" where each word is different from the previous one by only one character. The function "solution" controls the loop that checks each element of the array and calls the function "findNext" to check if there is another word that is different from the current one by only one character. If it finds it, the function recursively calls itself, passing the new word as parameter and the remaining array elements. The function "differsByOneChar" checks if two strings are different by only one character. If the entire array is traversed and no word is found, the program returns 'false'. If any word is found, the program returns 'true'.
// Esse código verifica se existe uma sequência de palavras na matriz "a" onde cada palavra seja diferente da anterior por apenas um caractere. A função "solution" controla o loop que verifica cada elemento da matriz e chama a função "findNext" para verificar se existe outra palavra diferente da atual por apenas um caractere. Se encontrar, a função chama recursivamente a si mesma, passando a nova palavra como parâmetro e os elementos restantes da matriz. A função "differsByOneChar" verifica se duas strings são diferentes por apenas um caractere. Se a matriz inteira for percorrida e nenhuma palavra for encontrada, o programa retornará 'false'. Se alguma palavra for encontrada, o programa retornará 'true'.

function solution(a) {
    for (let i = 0; i < a.length; i++) {
        let remaining = findNext(a[i], a);
        if (remaining.length === 0) return true;
    }
    return false;
}

function findNext(current, a) {
    if (a.length === 0) return a;
    for (let i = 0; i < a.length; i++) {
        if (differsByOneChar(current, a[i])) {
            let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i + 1)));
            if (remaining.length === 0) return remaining;
        }
    }
    return a;
}

function differsByOneChar(s1, s2) {
    let mismatches = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) mismatches++;
        if (mismatches > 1) break;
    }
    return mismatches === 1;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputArray = [
        "aba",
        "bbb",
        "bab"];
    assert.equal(solution(inputArray), false);
    console.log('Test 1: ', solution(inputArray));

    inputArray = [
        "ab",
        "bb",
        "aa"];
    assert.equal(solution(inputArray), true);
    console.log('Test 2: ', solution(inputArray));

    inputArray = [
        "q",
        "q"];
    assert.equal(solution(inputArray), false);
    console.log('Test 3: ', solution(inputArray));

    inputArray = [
        "zzzzab",
        "zzzzbb",
        "zzzzaa"];
    assert.equal(solution(inputArray), true);
    console.log('Test 4: ', solution(inputArray));

    inputArray = [
        "ab",
        "ad",
        "ef",
        "eg"];
    assert.equal(solution(inputArray), false);
    console.log('Test 5: ', solution(inputArray));

    inputArray = [
        "abc",
        "bef",
        "bcc",
        "bec",
        "bbc",
        "bdc"];
    assert.equal(solution(inputArray), true);
    console.log('Test 6: ', solution(inputArray));

    inputArray = [
        "abc",
        "abx",
        "axx",
        "abc"];
    assert.equal(solution(inputArray), false);
    console.log('Test 7: ', solution(inputArray));

    inputArray = [
        "abc",
        "abx",
        "axx",
        "abx",
        "abc"];
    assert.equal(solution(inputArray), true);
    console.log('Test 8: ', solution(inputArray));

    inputArray = [
        "f",
        "g",
        "a",
        "h"];
    assert.equal(solution(inputArray), true);
    console.log('Test 9: ', solution(inputArray));

    inputArray = [
        "ff",
        "gf",
        "af",
        "ar",
        "hf"];
    assert.equal(solution(inputArray), true);
    console.log('Test 10: ', solution(inputArray));

    inputArray = [
        "a",
        "b",
        "c"];
    assert.equal(solution(inputArray), true);
    console.log('Test 11: ', solution(inputArray));
}

testSolution();
