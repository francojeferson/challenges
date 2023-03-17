// This code defines a function called solution that takes in a parameter called year. The function then divides the year parameter by 100 and rounds up to the nearest integer using the Math.ceil() method. Finally, it returns this result as the output of the function. In other words, the code returns the century of the input year.

function solution(year) {
    return Math.ceil(year / 100);
}

const assert = require('assert');
function testSolution() {
    let year = 1905;
    assert.deepStrictEqual(solution(year), 20);
    console.log('Test 1: ', solution(year));

    year = 1700;
    assert.deepStrictEqual(solution(year), 17);
    console.log('Test 2: ', solution(year));

    year = 1988;
    assert.deepStrictEqual(solution(year), 20);
    console.log('Test 3: ', solution(year));

    year = 2000;
    assert.deepStrictEqual(solution(year), 20);
    console.log('Test 4: ', solution(year));

    year = 2001;
    assert.deepStrictEqual(solution(year), 21);
    console.log('Test 5: ', solution(year));

    year = 200;
    assert.deepStrictEqual(solution(year), 2);
    console.log('Test 6: ', solution(year));

    year = 374;
    assert.deepStrictEqual(solution(year), 4);
    console.log('Test 7: ', solution(year));

    year = 45;
    assert.deepStrictEqual(solution(year), 1);
    console.log('Test 8: ', solution(year));

    year = 8;
    assert.deepStrictEqual(solution(year), 1);
    console.log('Test 9: ', solution(year));
}

testSolution();
