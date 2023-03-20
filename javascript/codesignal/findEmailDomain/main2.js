// This code defines a function named solution that takes in a single parameter address. The function returns the part of the given address that comes after the "@" symbol.
// More specifically, the function uses the split method of the address string to break it up into an array of substrings. The @ character is used as the separator, so the array will contain two elements: the substring before the @ symbol, and the substring after it.
// The pop method is then called on the resulting array to remove and return the last element (i.e. the substring after the @ symbol). This is ultimately what the solution function returns.

// solution by jrmoser
function solution(address) {
    return address.split('@').pop();
}

const assert = require('assert');
function testSolution() {
    let address = "prettyandsimple@example.com";
    assert.deepStrictEqual(solution(address), "example.com");
    console.log('Test 1: ', solution(address));

    address = "fully-qualified-domain@codesignal.com";
    assert.deepStrictEqual(solution(address), "codesignal.com");
    console.log('Test 2: ', solution(address));

    address = "\" \"@space.com";
    assert.deepStrictEqual(solution(address), "space.com");
    console.log('Test 3: ', solution(address));

    address = "someaddress@yandex.ru";
    assert.deepStrictEqual(solution(address), "yandex.ru");
    console.log('Test 4: ', solution(address));

    address = "\" \"@xample.org";
    assert.deepStrictEqual(solution(address), "xample.org");
    console.log('Test 5: ', solution(address));

    address = "\"much.more unusual\"@yahoo.com";
    assert.deepStrictEqual(solution(address), "yahoo.com");
    console.log('Test 6: ', solution(address));

    address = "\"very.unusual.@.unusual.com\"@usual.com";
    assert.deepStrictEqual(solution(address), "usual.com");
    console.log('Test 7: ', solution(address));

    address = "admin@mailserver2.ru";
    assert.deepStrictEqual(solution(address), "mailserver2.ru");
    console.log('Test 8: ', solution(address));

    address = "example-indeed@strange-example.com";
    assert.deepStrictEqual(solution(address), "strange-example.com");
    console.log('Test 9: ', solution(address));

    address = "very.common@gmail.com";
    assert.deepStrictEqual(solution(address), "gmail.com");
    console.log('Test 10: ', solution(address));
}

testSolution();
