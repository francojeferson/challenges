// This is a function that takes in a string as its argument and returns a compressed version of the string. The compression involves replacing repeated characters with a number indicating how many times they appear consecutively in the string. If a character is not repeated, it is simply added to the compressed string as is.
// Here is a breakdown of the code:

// The let count = 1 variable is set to keep track of the number of times a character appears consecutively in the string.

// The let ans = '' variable is set to store the compressed string result.

// The for loop iterates over each character in the input string s.

// If the current character is the same as the next character, the count variable is incremented.

// If the current character is not the same as the next character, the compressed string is updated with the count and character (if the count is greater than 1) or just the character (if the count is 1).

// The count variable is reset to 1 after each character is processed.

// The compressed string ans is returned as the result of the function.

// solution by gugo
function solution(s) {
    let count = 1;
    let ans = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++;
        } else {
            if (count > 1) ans += count + s[i];
            else ans += s[i];
            count = 1;
        }
    }
    return ans;
}

const assert = require('assert');
function testSolution() {
    try {
        let s = "aabbbc";
        assert.deepStrictEqual(solution(s), "2a3bc");
        console.log('Test 1: ', solution(s));

        s = "abbcabb";
        assert.deepStrictEqual(solution(s), "a2bca2b");
        console.log('Test 2: ', solution(s));

        s = "abcd";
        assert.deepStrictEqual(solution(s), "abcd");
        console.log('Test 3: ', solution(s));

        s = "zzzz";
        assert.deepStrictEqual(solution(s), "4z");
        console.log('Test 4: ', solution(s));

        s = "wwwwwwwawwwwwww";
        assert.deepStrictEqual(solution(s), "7wa7w");
        console.log('Test 5: ', solution(s));

        s = "ccccccccccccccc";
        assert.deepStrictEqual(solution(s), "15c");
        console.log('Test 6: ', solution(s));

        s = "qwertyuioplkjhg";
        assert.deepStrictEqual(solution(s), "qwertyuioplkjhg");
        console.log('Test 7: ', solution(s));

        s = "ssiiggkooo";
        assert.deepStrictEqual(solution(s), "2s2i2gk3o");
        console.log('Test 8: ', solution(s));

        s = "adfaaa";
        assert.deepStrictEqual(solution(s), "adf3a");
        console.log('Test 9: ', solution(s));

        s = "bbjaadlkjdl";
        assert.deepStrictEqual(solution(s), "2bj2adlkjdl");
        console.log('Test 10: ', solution(s));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
