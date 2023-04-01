// The given function solution(inputString) performs the following steps:

// Initialize an infinite while loop.
// In each iteration of the loop, find the index of the first occurrence of ) character in the inputString using indexOf() method and save it to the variable c.
// If there is no ) character found, exit the loop using the break statement.
// Find the index of the last occurrence of the ( character before the ) character, using lastIndexOf() method, and save it to the variable o.
// Extract the substring of inputString from the start of the string up to the index o and save it to the variable start.
// Extract the substring of inputString from the index o+1 (right after the ( character) and up to the index c (the ) character) and then reverse it using split(), reverse() and join() methods, and save it to the variable middle.
// Extract the substring of inputString from the index c+1 (right after the ) character) up to the end of the string and save it to the variable end.
// Combine the start and end substrings with the reversed middle substring and save the result to the variable inputString.
// Repeat from step 2 until there is no ) character found in the inputString.
// Return the modified inputString.

// In summary, the given function solution() reverses the characters between each pair of opening and closing parentheses in a given string inputString.

function solution(inputString) {
    while (true) {
        let c = inputString.indexOf(')');
        if (c === -1) break;
        let o = inputString.substring(0, c).lastIndexOf('(');
        let start = inputString.substring(0, o);
        let middle = inputString
            .substring(o + 1, c)
            .split('')
            .reverse()
            .join('');
        let end = inputString.substring(c + 1, inputString.length);
        inputString = start + middle + end;
    }
    return inputString;
}

const assert = require('assert');
function testSolution() {
    try {
        let inputString = "(bar)";
        assert.deepStrictEqual(solution(inputString), "rab");
        console.log('Test 1: ', solution(inputString));

        inputString = "foo(bar)baz";
        assert.deepStrictEqual(solution(inputString), "foorabbaz");
        console.log('Test 2: ', solution(inputString));

        inputString = "foo(bar)baz(blim)";
        assert.deepStrictEqual(solution(inputString), "foorabbazmilb");
        console.log('Test 3: ', solution(inputString));

        inputString = "foo(bar(baz))blim";
        assert.deepStrictEqual(solution(inputString), "foobazrabblim");
        console.log('Test 4: ', solution(inputString));

        inputString = "";
        assert.deepStrictEqual(solution(inputString), "");
        console.log('Test 5: ', solution(inputString));

        inputString = "()";
        assert.deepStrictEqual(solution(inputString), "");
        console.log('Test 6: ', solution(inputString));

        inputString = "(abc)d(efg)";
        assert.deepStrictEqual(solution(inputString), "cbadgfe");
        console.log('Test 7: ', solution(inputString));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
