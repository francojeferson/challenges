// This code takes two parameters, divisor and bound. It uses the modulus operator to find the remainder from dividing bound by divisor. It then subtracts this remainder from the bound and returns the result. Essentially, it finds the largest multiple of the divisor that is less than or equal to the bound.

function solution(divisor, bound) {
    return bound - (bound % divisor);
}

const assert = require('assert');
function testSolution() {
    try {
        let divisor = 3;
        let bound = 10;
        assert.deepStrictEqual(solution(divisor, bound), 9);
        console.log('Test 1: ', solution(divisor, bound));

        divisor = 2;
        bound = 7;
        assert.deepStrictEqual(solution(divisor, bound), 6);
        console.log('Test 2: ', solution(divisor, bound));

        divisor = 10;
        bound = 50;
        assert.deepStrictEqual(solution(divisor, bound), 50);
        console.log('Test 3: ', solution(divisor, bound));

        divisor = 7;
        bound = 100;
        assert.deepStrictEqual(solution(divisor, bound), 98);
        console.log('Test 4: ', solution(divisor, bound));

        divisor = 7;
        bound = 20;
        assert.deepStrictEqual(solution(divisor, bound), 14);
        console.log('Test 5: ', solution(divisor, bound));

        divisor = 5;
        bound = 13;
        assert.deepStrictEqual(solution(divisor, bound), 10);
        console.log('Test 6: ', solution(divisor, bound));

        divisor = 8;
        bound = 88;
        assert.deepStrictEqual(solution(divisor, bound), 88);
        console.log('Test 7: ', solution(divisor, bound));

        divisor = 10;
        bound = 100;
        assert.deepStrictEqual(solution(divisor, bound), 100);
        console.log('Test 8: ', solution(divisor, bound));

        divisor = 2;
        bound = 5;
        assert.deepStrictEqual(solution(divisor, bound), 4);
        console.log('Test 9: ', solution(divisor, bound));

        divisor = 3;
        bound = 5;
        assert.deepStrictEqual(solution(divisor, bound), 3);
        console.log('Test 10: ', solution(divisor, bound));

        divisor = 9;
        bound = 11;
        assert.deepStrictEqual(solution(divisor, bound), 9);
        console.log('Test 11: ', solution(divisor, bound));

        divisor = 8;
        bound = 15;
        assert.deepStrictEqual(solution(divisor, bound), 8);
        console.log('Test 12: ', solution(divisor, bound));

        divisor = 9;
        bound = 60;
        assert.deepStrictEqual(solution(divisor, bound), 54);
        console.log('Test 13: ', solution(divisor, bound));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
