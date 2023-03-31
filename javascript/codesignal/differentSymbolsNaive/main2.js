// This is a function named solution that takes a string s as an argument. The function initializes an empty object named store and a variable named total set to zero. The function loops through each character in the input string s, and for each character, it checks if the character exists in the store object. If the character does not exist in the store object, total is incremented by 1. Regardless of whether the character exists in the store object or not, the character is added to the store object with a value of true. After the loop completes, total is returned from the function, which represents the number of unique characters in the input string.

// solution by knems
function solution(s) {
    const store = {};
    let total = 0;

    for (let i = 0; i < s.length; i += 1) {
        let local = s[i];

        if (!store[local]) total += 1;

        store[local] = true;
    }

    return total;
}

const assert = require('assert');
function testSolution() {
    try {
        let s = "cabca";
        assert.deepStrictEqual(solution(s), 3);
        console.log('Test 1: ', solution(s));

        s = "aba";
        assert.deepStrictEqual(solution(s), 2);
        console.log('Test 2: ', solution(s));

        s = "ccccccccccc";
        assert.deepStrictEqual(solution(s), 1);
        console.log('Test 3: ', solution(s));

        s = "bcaba";
        assert.deepStrictEqual(solution(s), 3);
        console.log('Test 4: ', solution(s));

        s = "codesignal";
        assert.deepStrictEqual(solution(s), 10);
        console.log('Test 5: ', solution(s));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
