// This function takes a string of binary code as input and converts it to a human-readable message by decoding the binary digits into ASCII characters.
// First, the function initializes an empty string variable, message, to store the final output.
// Next, it converts the input binary code into an array using the Array.from() method, which creates a new array from an array-like object (in this case, a string).
// Then, the function enters a while loop that repeats until all the binary code has been converted into characters for the message.
// Inside the loop, the function takes the first 8 elements of the binary code array (using splice(0, 8)), joins them together into a string, and uses parseInt() with a radix of 2 (binary) to convert that string into its decimal equivalent.
// That decimal value is then converted into its corresponding ASCII character using String.fromCharCode(). The resulting character is appended to the message string.
// This process continues until all the binary code has been converted into characters and appended to the message string. Finally, the function returns the completed message string.

// solution by kafusnas
function solution(code) {
    let message = "";
    let arrCode = Array.from(code);
    while (arrCode.length > 0) {
        message += String.fromCharCode(parseInt(arrCode.splice(0, 8).join(""), 2));
    }
    return message;
}

const assert = require('assert');
function testSolution() {
    try {
        let code = "010010000110010101101100011011000110111100100001";
        assert.deepStrictEqual(solution(code), "Hello!");
        console.log('Test 1: ', solution(code));

        code = "01001101011000010111100100100000011101000110100001100101001000000100011001101111011100100110001101100101001000000110001001100101001000000111011101101001011101000110100000100000011110010110111101110101";
        assert.deepStrictEqual(solution(code), "May the Force be with you");
        console.log('Test 2: ', solution(code));

        code = "010110010110111101110101001000000110100001100001011001000010000001101101011001010010000001100001011101000010000001100000011010000110010101101100011011000110111100101110";
        assert.deepStrictEqual(solution(code), "You had me at `hello.");
        console.log('Test 3: ', solution(code));

        code = "010001010110110001100101011011010110010101101110011101000110000101110010011110010010110000100000011011010111100100100000011001000110010101100001011100100010000001010111011000010111010001110011011011110110111000100001";
        assert.deepStrictEqual(solution(code), "Elementary, my dear Watson!");
        console.log('Test 4: ', solution(code));

        code = "010011000110111101110110011001010010000001000110011011110111001000100000010000010110110001101100001011000010000001001000011000010111010001110010011001010110010000100000010001100110111101110010001000000100111001101111011011100110010100101110";
        assert.deepStrictEqual(solution(code), "Love For All, Hatred For None.");
        console.log('Test 5: ', solution(code));

        code = "0100001101101000011000010110111001100111011001010010000001110100011010000110010100100000011101110110111101110010011011000110010000100000011000100111100100100000011000100110010101101001011011100110011100100000011110010110111101110101011100100111001101100101011011000110011000101110";
        assert.deepStrictEqual(solution(code), "Change the world by being yourself.");
        console.log('Test 6: ', solution(code));

        code = "01000101011101100110010101110010011110010010000001101101011011110110110101100101011011100111010000100000011010010111001100100000011000010010000001100110011100100110010101110011011010000010000001100010011001010110011101101001011011100110111001101001011011100110011100101110";
        assert.deepStrictEqual(solution(code), "Every moment is a fresh beginning.");
        console.log('Test 7: ', solution(code));

        code = "010011100110010101110110011001010111001000100000011100100110010101100111011100100110010101110100001000000110000101101110011110010111010001101000011010010110111001100111001000000111010001101000011000010111010000100000011011010110000101100100011001010010000001111001011011110111010100100000011100110110110101101001011011000110010100101110";
        assert.deepStrictEqual(solution(code), "Never regret anything that made you smile.");
        console.log('Test 8: ', solution(code));

        code = "010001000110100101100101001000000111011101101001011101000110100000100000011011010110010101101101011011110111001001101001011001010111001100101100001000000110111001101111011101000010000001100100011100100110010101100001011011010111001100101110";
        assert.deepStrictEqual(solution(code), "Die with memories, not dreams.");
        console.log('Test 9: ', solution(code));

        code = "0100000101110011011100000110100101110010011001010010000001110100011011110010000001101001011011100111001101110000011010010111001001100101001000000110001001100101011001100110111101110010011001010010000001110111011001010010000001100101011110000111000001101001011100100110010100101110";
        assert.deepStrictEqual(solution(code), "Aspire to inspire before we expire.");
        console.log('Test 10: ', solution(code));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
