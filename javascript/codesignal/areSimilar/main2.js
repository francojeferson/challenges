// This code defines a function called solution that takes two arguments a and b. It creates two new arrays, ad and bd, by applying a filter function that removes any elements from a and b respectively that are equal to their corresponding element in the other array. The function then checks if the length of ad is either 0 or 2 and if the elements in ad are equal to the reversed elements in bd. If this condition is true, it returns true, and returns false otherwise.

// solution by wanicode
function solution(a, b) {
    const ad = a.filter((v, i) => v != b[i]);
    const bd = b.filter((v, i) => v != a[i]);
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''));
}

const assert = require('assert');
function testSolution() {
    try {
        let a = [1, 2, 3];
        let b = [1, 2, 3];
        assert.deepStrictEqual(solution(a, b), true);
        console.log('Test 1: ', solution(a, b));

        a = [1, 2, 3];
        b = [2, 1, 3];
        assert.deepStrictEqual(solution(a, b), true);
        console.log('Test 2: ', solution(a, b));

        a = [1, 2, 2];
        b = [2, 1, 1];
        assert.deepStrictEqual(solution(a, b), false);
        console.log('Test 3: ', solution(a, b));

        a = [1, 2, 1, 2];
        b = [2, 2, 1, 1];
        assert.deepStrictEqual(solution(a, b), true);
        console.log('Test 4: ', solution(a, b));

        a = [1, 2, 1, 2, 2, 1];
        b = [2, 2, 1, 1, 2, 1];
        assert.deepStrictEqual(solution(a, b), true);
        console.log('Test 5: ', solution(a, b));

        a = [1, 1, 4];
        b = [1, 2, 3];
        assert.deepStrictEqual(solution(a, b), false);
        console.log('Test 6: ', solution(a, b));

        a = [1, 2, 3];
        b = [1, 10, 2];
        assert.deepStrictEqual(solution(a, b), false);
        console.log('Test 7: ', solution(a, b));

        a = [2, 3, 1];
        b = [1, 3, 2];
        assert.deepStrictEqual(solution(a, b), true);
        console.log('Test 8: ', solution(a, b));

        a = [2, 3, 9];
        b = [10, 3, 2];
        assert.deepStrictEqual(solution(a, b), false);
        console.log('Test 9: ', solution(a, b));

        a = [832, 998, 148, 570, 533, 561, 894, 147, 455, 279];
        b = [832, 570, 148, 998, 533, 561, 455, 147, 894, 279];
        assert.deepStrictEqual(solution(a, b), false);
        console.log('Test 10: ', solution(a, b));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
