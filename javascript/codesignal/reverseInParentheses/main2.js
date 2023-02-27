// This function takes a string as input and inverts any contents in parentheses. For example, if the input string is "abc(de)f", the output will be "abcfed". The function uses a while loop to check whether the input string contains parentheses. If it does, the content between the parentheses is captured using regular expressions and the content is inverted using the reverse() method. Then the input string is replaced with the inverted string. When there are no more parentheses in the input string, the function returns the resulting string.
// Esta função recebe uma string como entrada e inverte qualquer conteúdo entre parênteses. Por exemplo, se a string de entrada for "abc(de)f", a saída será "abcfed". A função usa um loop while para verificar se a string de entrada contém parênteses. Se houver, o conteúdo entre os parênteses é capturado usando expressões regulares e o conteúdo é invertido usando o método reverse(). Em seguida, a string de entrada é substituída pela string invertida. Quando não há mais parênteses na string de entrada, a função retorna a string resultante.

function solution(inputString) {
    let reversedString;
    while (inputString.includes('(')) {
        reversedString = [...inputString.match(/\(([^()]*)\)/)[1]].reverse().join('');
        inputString = inputString.replace(/\(([^()]*)\)/, reversedString);
    }
    return inputString;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputString = "(bar)";
    assert.deepStrictEqual(solution(inputString), "rab");
    console.log('Test 1: ', solution(inputString));

    inputString = "foo(bar)baz";
    assert.deepStrictEqual(solution(inputString), "foorabbaz");
    console.log('Test 2: ', solution(inputString));

    inputString = "foo(bar)baz(blim)";
    assert.deepStrictEqual(solution(inputString), "foorabbazmilb");
    console.log('Test 3: ', solution(inputString));

    inputString = "foo(bar(baz))blim";
    assert.deepStrictEqual(solution(inputString), "foobazrabblim");
    console.log('Test 4: ', solution(inputString));

    inputString = "";
    assert.deepStrictEqual(solution(inputString), "");
    console.log('Test 5: ', solution(inputString));

    inputString = "()";
    assert.deepStrictEqual(solution(inputString), "");
    console.log('Test 6: ', solution(inputString));

    inputString = "(abc)d(efg)";
    assert.deepStrictEqual(solution(inputString), "cbadgfe");
    console.log('Test 7: ', solution(inputString));
}

testSolution();
