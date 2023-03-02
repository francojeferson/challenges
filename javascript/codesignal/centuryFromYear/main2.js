// This code defines a function called "solution" that takes a parameter called "year" and returns the result of dividing "year" by 100 rounded up. For example, if the parameter is 2020, the function will return 21.
// Esse código define uma função chamada "solution" que recebe um parâmetro chamado "year" e retorna o resultado da divisão de "year" por 100 arredondado para cima. Por exemplo, se o parâmetro for 2020, a função retornará 21.

const solution = year => Math.ceil(year / 100);

// Test 1: 20 Test 2: 17 Test 3: 20 Test 4: 20 Test 5: 21 Test 6: 2 Test 7: 4 Test 8: 1 Test 9: 1 No errors occurred and the code was compiled and executed. The test results are printed on the console.
// Test 1: 20 Test 2: 17 Test 3: 20 Test 4: 20 Test 5: 21 Test 6: 2 Test 7: 4 Test 8: 1 Test 9: 1 Nenhum erro ocorreu e o código foi compilado e executado. Os resultados dos testes foram impressos no console.

const assert = require('assert');
function testSolution() {
    let year = 1905;
    assert.deepStrictEqual(solution(year), 20);
    console.log('Test 1: ', solution(year));

    year = 1700;
    assert.deepStrictEqual(solution(year), 17);
    console.log('Test 2: ', solution(year));

    year = 1988;
    assert.deepStrictEqual(solution(year), 20);
    console.log('Test 3: ', solution(year));

    year = 2000;
    assert.deepStrictEqual(solution(year), 20);
    console.log('Test 4: ', solution(year));

    year = 2001;
    assert.deepStrictEqual(solution(year), 21);
    console.log('Test 5: ', solution(year));

    year = 200;
    assert.deepStrictEqual(solution(year), 2);
    console.log('Test 6: ', solution(year));

    year = 374;
    assert.deepStrictEqual(solution(year), 4);
    console.log('Test 7: ', solution(year));

    year = 45;
    assert.deepStrictEqual(solution(year), 1);
    console.log('Test 8: ', solution(year));

    year = 8;
    assert.deepStrictEqual(solution(year), 1);
    console.log('Test 9: ', solution(year));
}

testSolution();
