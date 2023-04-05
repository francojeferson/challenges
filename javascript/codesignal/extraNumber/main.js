// This code defines a function called "solution" that takes three parameters (a, b, and c). The function then uses the bitwise XOR operator (^) to perform an XOR (exclusive OR) operation on the three parameters. The XOR operator returns a 1 in each bit position where the corresponding bits of either but not both operands are 1s. In other words, the function returns the result of combining the three parameters in a way that preserves the bits that are different between them.

function solution(a, b, c) {
    return a ^ b ^ c;
}

const assert = require('assert');
function testSolution() {
    try {
        let a = 2;
        let b = 7;
        let c = 2;
        assert.deepStrictEqual(solution(a, b, c), 7);
        console.log('Test 1: ', solution(a, b, c));

        a = 3;
        b = 2;
        c = 2;
        assert.deepStrictEqual(solution(a, b, c), 3);
        console.log('Test 2: ', solution(a, b, c));

        a = 5;
        b = 5;
        c = 1;
        assert.deepStrictEqual(solution(a, b, c), 1);
        console.log('Test 3: ', solution(a, b, c));

        a = 500000000;
        b = 3;
        c = 500000000;
        assert.deepStrictEqual(solution(a, b, c), 3);
        console.log('Test 4: ', solution(a, b, c));

        a = 1;
        b = 5;
        c = 1;
        assert.deepStrictEqual(solution(a, b, c), 5);
        console.log('Test 5: ', solution(a, b, c));

        a = 5;
        b = 5;
        c = 3;
        assert.deepStrictEqual(solution(a, b, c), 3);
        console.log('Test 6: ', solution(a, b, c));

        a = 5;
        b = 1;
        c = 1;
        assert.deepStrictEqual(solution(a, b, c), 5);
        console.log('Test 7: ', solution(a, b, c));

        a = 4000000;
        b = 3000000;
        c = 4000000;
        assert.deepStrictEqual(solution(a, b, c), 3000000);
        console.log('Test 8: ', solution(a, b, c));

        a = 548442737;
        b = 82231042;
        c = 548442737;
        assert.deepStrictEqual(solution(a, b, c), 82231042);
        console.log('Test 9: ', solution(a, b, c));

        a = 469992838;
        b = 66019520;
        c = 66019520;
        assert.deepStrictEqual(solution(a, b, c), 469992838);
        console.log('Test 10: ', solution(a, b, c));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
