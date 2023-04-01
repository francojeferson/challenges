// This function, named 'solution', takes in one parameter, 'address', which is expected to be a string representing an email address. The function then uses the substring method to return the characters following the last occurrence of the '@' symbol, inclusive. Essentially, this function returns the domain of an email address.

function solution(address) {
    return address.substring(address.lastIndexOf('@') + 1);
}

const assert = require('assert');
function testSolution() {
    try {
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
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
