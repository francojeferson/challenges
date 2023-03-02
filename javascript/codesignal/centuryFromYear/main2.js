// This code defines a function called "solution" that receives a parameter "y". The function returns the result of dividing "y" by 100, rounding the result up (ceil).
// Esse código define uma função chamada "solution" que recebe um parâmetro "y". A função retorna o resultado da divisão de "y" por 100, arredondando o resultado para cima (ceil).

const solution = y => Math.ceil(y / 100);

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
