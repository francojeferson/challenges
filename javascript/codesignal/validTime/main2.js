// This code defines a function called solution which takes a string parameter called time. The function tries to convert the input time value to a JavaScript Date object by concatenating '1900-01-01 ' with the input time string. If the resulting date is a valid date (not 'Invalid Date') and the time is not '24:00', the function returns true. Otherwise, it returns false.

// solution by le_d31
function solution(time) {
    return (new Date('1900-01-01 ' + time) != 'Invalid Date' && time != '24:00');
}

const assert = require('assert');
function testSolution() {
    try {
        let time = "13:58";
        assert.deepStrictEqual(solution(time), true);
        console.log('Test 1: ', solution(time));

        time = "25:51";
        assert.deepStrictEqual(solution(time), false);
        console.log('Test 2: ', solution(time));

        time = "02:76";
        assert.deepStrictEqual(solution(time), false);
        console.log('Test 3: ', solution(time));

        time = "24:00";
        assert.deepStrictEqual(solution(time), false);
        console.log('Test 4: ', solution(time));

        time = "02:61";
        assert.deepStrictEqual(solution(time), false);
        console.log('Test 5: ', solution(time));

        time = "27:00";
        assert.deepStrictEqual(solution(time), false);
        console.log('Test 6: ', solution(time));

        time = "19:66";
        assert.deepStrictEqual(solution(time), false);
        console.log('Test 7: ', solution(time));

        time = "12:31";
        assert.deepStrictEqual(solution(time), true);
        console.log('Test 8: ', solution(time));

        time = "25:73";
        assert.deepStrictEqual(solution(time), false);
        console.log('Test 9: ', solution(time));

        time = "09:56";
        assert.deepStrictEqual(solution(time), true);
        console.log('Test 10: ', solution(time));

        time = "03:29";
        assert.deepStrictEqual(solution(time), true);
        console.log('Test 11: ', solution(time));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
