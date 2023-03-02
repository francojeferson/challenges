// This code is a function that takes two parameters, param1 and param2. It adds the two parameters together and returns the sum.

function solution(param1, param2) {
    return param1 += param2;
}

const assert = require('assert');
function testSolution() {
    let param1 = 1;
    let param2 = 2;
    assert.deepStrictEqual(solution(param1, param2), 3);
    console.log('Test 1: ', solution(param1, param2));

    param1 = 0;
    param2 = 1000;
    assert.deepStrictEqual(solution(param1, param2), 1000);
    console.log('Test 2: ', solution(param1, param2));

    param1 = 2;
    param2 = -39;
    assert.deepStrictEqual(solution(param1, param2), -37);
    console.log('Test 3: ', solution(param1, param2));

    param1 = 99;
    param2 = 100;
    assert.deepStrictEqual(solution(param1, param2), 199);
    console.log('Test 4: ', solution(param1, param2));

    param1 = -100;
    param2 = 100;
    assert.deepStrictEqual(solution(param1, param2), 0);
    console.log('Test 5: ', solution(param1, param2));

    param1 = -1000;
    param2 = -1000;
    assert.deepStrictEqual(solution(param1, param2), -2000);
    console.log('Test 6: ', solution(param1, param2));
}

testSolution();
