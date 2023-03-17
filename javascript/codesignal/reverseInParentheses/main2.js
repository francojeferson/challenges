// This code defines a JavaScript function named solution which expects a single parameter inputString, a string of characters. The function aims to reverse the order of characters for each substring between brackets ().
// Here is a step-by-step outline of what the code does:

// The while loop will execute until all substrings enclosed in parenthesis are removed, hence it relies on the includes method to check if there are remaining open brackets or not.
// The replace method accepts two arguments: the first is a regular expression pattern that matches all parentheses of the input string and captures the string between the parentheses using the () syntax. The second argument is a function that will process the matched substring to reverse its order.
// The reversing operation is achieved by spreading the string {...str} into an array and then reversing its order and joining its elements back into a string with the join method.
// The modified string is then assigned back to inputString.
// When all the substrings enclosed in parentheses have been reversed, the while loop will terminate, and the final modified string will be returned.

// solution by jakzo
function solution(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
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
