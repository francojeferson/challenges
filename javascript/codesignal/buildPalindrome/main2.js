// The code defines a function called "solution" that takes in a string "st" as its parameter. It then checks if the string is a palindrome using a separate function "isPalindrome".
// If the string is already a palindrome, the "solution" function returns the original string "st".
// If the string is not a palindrome, the code enters a loop that iterates over every character in the string "st". For each iteration, it checks if the substring starting from the current character to the end of the string is a palindrome. If it is, the function returns the original string "st" concatenated with the reverse of the substring from the beginning of the string up to the current character.
// The string concatenation is performed with the "+" operator and the reverse of the substring is obtained using the Array method "reverse()". The method "Array.from(string)" is used to create an array of characters from the string so that the "reverse()" method can be applied to it.
// Here's the pseudocode for the "solution" function:

// Define a function called "solution" that takes one parameter "st", a string.
// Check if "st" is already a palindrome using the "isPalindrome" function.
// If "st" is a palindrome, return "st".
// If "st" is not a palindrome, enter a loop that iterates from 0 to the length of "st".
// At each iteration, check if the substring of "st" from the current index to the end of the string is a palindrome using the "isPalindrome" function.
// If the substring is a palindrome, concatenate the original string "st" with the reversed substring from the beginning of the string up to the current index using the "+" operator and the "reverse()" method on an array of the substring.
// Return the concatenated string.

// solution by devsnaked
function solution(st) {
    if (isPalindrome(st)) return st;
    for (var i = 0; i < st.length; i++) {
        if (isPalindrome(st.slice(i, st.length))) {
            return st + Array.from(st.slice(0, i)).reverse().join('');
        }
    }
}

function isPalindrome(string) {
    return string == Array.from(string).reverse().join('');
}

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
