// This function takes a year as a parameter and returns the century to which it belongs. It uses Math.ceil to round up the result if the year is a decimal number. For example, if the year 2020 is passed in, the function will return 21 (21st century).
// Essa função recebe um ano como parâmetro e retorna o século a que ele pertence. Ela usa a função Math.ceil para arredondar o resultado para cima, caso o ano seja um número decimal. Por exemplo, se for passado o ano 2020, a função retornará 21 (século XXI).

function solution(year) {
    return Math.ceil(year / 100);
}

// unit test
// teste unitário
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
