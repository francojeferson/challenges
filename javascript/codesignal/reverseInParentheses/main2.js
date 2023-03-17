// This is a JavaScript function called solution that takes in a single parameter inputString. The function replaces every substring enclosed in parentheses in the input string with a reversed version of itself until there are no more parentheses left. The revised string is then returned.
// The function performs this operation using a while loop and the includes method to determine if the input string contains any parentheses. The match method and a regular expression are used to find the first substring enclosed in parentheses. The [1] indexer is used to grab the capture group's content, which is then converted to an array using spread syntax ([...]). The reverse method is then used to reverse the array's elements, and the join method concatenates the elements together into a string.
// The replace method is used to replace the match with reversed string while maintaining the original string's value for the next iteration. Finally, the modified string inputString is returned.

function solution(inputString) {
    let reversedString;
    while (inputString.includes('(')) {
        reversedString = [...inputString.match(/\(([^()]*)\)/)[1]].reverse().join('');
        inputString = inputString.replace(/\(([^()]*)\)/, reversedString);
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
