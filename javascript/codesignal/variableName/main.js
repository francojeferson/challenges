// This code defines a function called solution that takes in a single parameter called name. The function returns a boolean value indicating whether the name parameter follows a specific pattern.
// The pattern is defined by a regular expression: ^[a-zA-Z_][a-zA-Z0-9_]*$. This regular expression requires that the string begins with a letter (a-z or A-Z) or an underscore (_), and is followed by zero or more occurrences of any letter (a-z or A-Z), any digit (0-9), or an underscore (_).
// The test() method is then used to test whether the name parameter matches this regular expression. If it does, the function returns true, indicating that the input string is valid. If it does not match the expression, the function returns false, indicating that the input string is invalid.

function solution(name) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name);
}

const assert = require('assert');
function testSolution() {
    try {
        let name = "var_1__Int";
        assert.deepStrictEqual(solution(name), true);
        console.log('Test 1: ', solution(name));

        name = "qq-q";
        assert.deepStrictEqual(solution(name), false);
        console.log('Test 2: ', solution(name));

        name = "2w2";
        assert.deepStrictEqual(solution(name), false);
        console.log('Test 3: ', solution(name));

        name = " variable";
        assert.deepStrictEqual(solution(name), false);
        console.log('Test 4: ', solution(name));

        name = "va[riable0";
        assert.deepStrictEqual(solution(name), false);
        console.log('Test 5: ', solution(name));

        name = "variable0";
        assert.deepStrictEqual(solution(name), true);
        console.log('Test 6: ', solution(name));

        name = "a";
        assert.deepStrictEqual(solution(name), true);
        console.log('Test 7: ', solution(name));

        name = "_Aas_23";
        assert.deepStrictEqual(solution(name), true);
        console.log('Test 8: ', solution(name));

        name = "a a_2";
        assert.deepStrictEqual(solution(name), false);
        console.log('Test 9: ', solution(name));

        name = "0ss";
        assert.deepStrictEqual(solution(name), false);
        console.log('Test 10: ', solution(name));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
