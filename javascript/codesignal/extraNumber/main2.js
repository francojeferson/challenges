// This code takes three values as input: a, b, and c. It then checks if a is equal to b. If a is equal to b, it returns the value of c. If a is not equal to b, it checks if a is equal to c. If a is equal to c, it returns the value of b. If a is not equal to c, it returns the value of a. Essentially, this code returns the value of the unique number among the three input values.

// solution by jfranciscomn
const solution = (a, b, c) => a == b ? c : a == c ? b : a;

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
