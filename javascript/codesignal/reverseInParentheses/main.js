// This function is used to reverse the order of characters in parentheses. It starts by looking for a closing parenthesis (')'), and then looks for the last opening parenthesis ('(') before the closing parenthesis. It then separates the string into three parts: the beginning of the string before the closing parentheses, the middle of the string between the parentheses, and the end of the string after the closing parentheses. The middle of the string is then inverted and the three parts are concatenated to form the new string. The function then repeats this process until all the parentheses are inverted. Finally, the function returns the new inverted string.
// Esta função é usada para inverter a ordem dos caracteres entre parênteses. Ela começa procurando por um fechamento de parênteses (')') e, em seguida, procura pelo último abrir parênteses ('(') antes do fechamento. Em seguida, ela separa a string em três partes: o início da string antes do abrir parênteses, o meio da string entre os parênteses e o final da string após o fechamento de parêntese. O meio da string é então invertido e as três partes são concatenadas para formar a nova string. A função então repete esse processo até que todos os parêntesis sejam invertidos. Por fim, a função retorna a nova string invertida.

function solution(inputString) {
    let c;
    let o;
    let start;
    let middle;
    let end;

    while (true) {
        c = inputString.indexOf(')');

        if (c === -1) break;

        o = inputString.substring(0, c).lastIndexOf('(');
        start = inputString.substring(0, o);
        middle = inputString.substring(o + 1, c).split('').reverse().join('');
        end = inputString.substring(c + 1, inputString.length);

        inputString = start + middle + end;
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
