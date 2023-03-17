// The given code is a function that expects a string input containing parentheses. The function executes the following steps:

// Initialize 4 variables with an empty value.
// Create an infinite loop.
// In each iteration of the loop:
// a. Search for the next occurrence of the closing parentheses (')') in the given input string.
// b. If no ')' is found, exit the loop.
// c. If a ')' is found, search the substring of the input string that starts from the beginning of the string and ends at the position of the last ')' (parentheses opening)
// d. Extract the substring from the input string that starts after the last '(' and ends before the current ')', reverse the extracted string and save the result in the middle variable.
// e. Extract the substring of the input string that starts from the position after the current ')' and ends at the end of the input string
// f. Concatenate the start, middle, and end substrings, and overwrite the input string with the concatenated result.
// Repeat the above loop until all ')' parentheses have been found and all relevant portions of the input string have been reversed and concatenated
// Return the final modified input string.

function solution(inputString) {
    let c;
    let o;
    let start;
    let middle;
    let end;

    while (true) {
        c = inputString.indexOf(')');

        if (c === -1) break;

        o = inputString.substring(0, c).lastIndexOf('(');
        start = inputString.substring(0, o);
        middle = inputString.substring(o + 1, c).split('').reverse().join('');
        end = inputString.substring(c + 1, inputString.length);

        inputString = start + middle + end;
    }

    return inputString;
}

const assert = require('assert');
function testSolution() {
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
}

testSolution();
