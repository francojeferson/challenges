// This is a function called solution that takes one argument, time. It splits the time argument using the ':' character, destructuring the resulting array into the hours and minutes variables. Then, the function returns true if the hours variable is less than 24 and the minutes variable is less than 60. If either hours or minutes is greater than or equal to its respective limit, the function returns false.

function solution(time) {
    const [hours, minutes] = time.split(':');
    return hours < 24 && minutes < 60;
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
