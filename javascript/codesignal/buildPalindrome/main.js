// This code defines a function named solution that takes in a single string argument st. The function creates a variable palindrome and assigns it the value of st. It then initiates a loop that continues until the palindrome is equal to its reversed version. Within each iteration of the loop, the function creates a new palindrome by concatenating st with the reversed first i characters of st. The i variable starts at 0 and increments by 1 with each iteration of the loop. The final result is the newly created palindrome returned by the function.
// In simple terms, this function takes a string and adds characters to it until the result is a palindrome. The palindrome is returned as output.

function solution(st) {
    let palindrome = st;
    let i = 0;
    while (palindrome !== palindrome.split('').reverse().join('')) {
        palindrome = st + st.slice(0, i).split('').reverse().join('');
        i++;
    }
    return palindrome;
}

const assert = require('assert');
function testSolution() {
    let st = "abcdc";
    assert.deepStrictEqual(solution(st), "abcdcba");
    console.log('Test 1: ', solution(st));

    st = "ababab";
    assert.deepStrictEqual(solution(st), "abababa");
    console.log('Test 2: ', solution(st));

    st = "abba";
    assert.deepStrictEqual(solution(st), "abba");
    console.log('Test 3: ', solution(st));

    st = "abaa";
    assert.deepStrictEqual(solution(st), "abaaba");
    console.log('Test 4: ', solution(st));

    st = "aaaaba";
    assert.deepStrictEqual(solution(st), "aaaabaaaa");
    console.log('Test 5: ', solution(st));

    st = "abc";
    assert.deepStrictEqual(solution(st), "abcba");
    console.log('Test 6: ', solution(st));

    st = "kebab";
    assert.deepStrictEqual(solution(st), "kebabek");
    console.log('Test 7: ', solution(st));

    st = "abccba";
    assert.deepStrictEqual(solution(st), "abccba");
    console.log('Test 8: ', solution(st));

    st = "abcabc";
    assert.deepStrictEqual(solution(st), "abcabcbacba");
    console.log('Test 9: ', solution(st));

    st = "cbdbedffcg";
    assert.deepStrictEqual(solution(st), "cbdbedffcgcffdebdbc");
    console.log('Test 10: ', solution(st));

    st = "euotmn";
    assert.deepStrictEqual(solution(st), "euotmnmtoue");
    console.log('Test 11: ', solution(st));
}

testSolution();
