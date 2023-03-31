// This code defines a function called solution that takes a number n as an argument. The function converts the number n to a string using the toString method, then splits the string into an array of individual characters using the split method. The every method is called on the resulting array, and the arrow function passed to it checks that each character is an even number (i.e. has no remainder when divided by 2 using the modulus operator %). If all characters pass this check, every returns true and the function returns true, indicating that all digits of the original number are even. If any character fails the check, every returns false and the function returns false, indicating that at least one digit of the original number is odd.

function solution(n) {
    return n.toString().split('').every((x) => x % 2 === 0);
}

const assert = require('assert');
function testSolution() {
    try {
        let n = 248622;
        assert.deepStrictEqual(solution(n), true);
        console.log('Test 1: ', solution(n));

        n = 642386;
        assert.deepStrictEqual(solution(n), false);
        console.log('Test 2: ', solution(n));

        n = 248842;
        assert.deepStrictEqual(solution(n), true);
        console.log('Test 3: ', solution(n));

        n = 1;
        assert.deepStrictEqual(solution(n), false);
        console.log('Test 4: ', solution(n));

        n = 8;
        assert.deepStrictEqual(solution(n), true);
        console.log('Test 5: ', solution(n));

        n = 2462487;
        assert.deepStrictEqual(solution(n), false);
        console.log('Test 6: ', solution(n));

        n = 468402800;
        assert.deepStrictEqual(solution(n), true);
        console.log('Test 7: ', solution(n));

        n = 2468428;
        assert.deepStrictEqual(solution(n), true);
        console.log('Test 8: ', solution(n));

        n = 5468428;
        assert.deepStrictEqual(solution(n), false);
        console.log('Test 9: ', solution(n));

        n = 7468428;
        assert.deepStrictEqual(solution(n), false);
        console.log('Test 10: ', solution(n));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
