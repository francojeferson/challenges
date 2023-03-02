// This function takes a year as parameter and returns the century to which it belongs. It does this by rounding up the year and dividing it by 100. For example, if the function receives the year 2020, it will return 21, since 2020 is part of the 21st century.
// Esta função recebe um ano como parâmetro e retorna o século a que pertence. Ela faz isso arredondando o ano para cima e dividindo-o por 100. Por exemplo, se a função receber o ano 2020, ela retornará 21, pois 2020 é parte do século 21.

function solution(year) {
    return Math.ceil(year / 100);
}

// Test 1: 20, Test 2: 17, Test 3: 20, Test 4: 20, Test 5: 21, Test 6: 2, Test 7: 4, Test 8: 1, Test 9: 1. No errors occurred during execution and all tests ran successfully.
// Test 1: 20, Test 2: 17, Test 3: 20, Test 4: 20, Test 5: 21, Test 6: 2, Test 7: 4, Test 8: 1, Test 9: 1. Nenhum erro ocorreu durante a execução e todos os testes foram executados com sucesso.

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
