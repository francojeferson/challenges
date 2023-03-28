// The code calculates the sum of the digits in a time value represented in minutes. The input is the number of minutes, n.
// First, the code calculates the number of hours, hours, by dividing the input by 60 and rounding down to the nearest integer using the | 0 bitwise operator.
// Then, the code calculates the number of remaining minutes, minutes, by taking the input modulo 60.
// Next, the code calculates the sum of the digits by adding up the individual digits in the hours and minutes values.
// To do this, it first calculates the tens digit of the hours (i.e. the number of tens of hours), by dividing the hours by 10 and rounding down to the nearest integer.
// It then calculates the ones digit of the hours (i.e. the number of hours left over after taking away the tens of hours), by taking the hours modulo 10.
// Similarly, it calculates the tens and ones digits of the minutes.
// Finally, it adds up all four digits (i.e. the tens and ones digits of the hours and minutes) and returns their sum as the output of the function.

// solution by jakzo
function solution(n) {
    let hours = n / 60 | 0,
        minutes = n % 60;
    return (hours / 10 | 0) + hours % 10 + (minutes / 10 | 0) + minutes % 10;
}

const assert = require('assert');
function testSolution() {
    let n = 240;
    assert.deepStrictEqual(solution(n), 4);
    console.log('Test 1: ', solution(n));

    n = 808;
    assert.deepStrictEqual(solution(n), 14);
    console.log('Test 2: ', solution(n));

    n = 1439;
    assert.deepStrictEqual(solution(n), 19);
    console.log('Test 3: ', solution(n));

    n = 0;
    assert.deepStrictEqual(solution(n), 0);
    console.log('Test 4: ', solution(n));

    n = 23;
    assert.deepStrictEqual(solution(n), 5);
    console.log('Test 5: ', solution(n));

    n = 8;
    assert.deepStrictEqual(solution(n), 8);
    console.log('Test 6: ', solution(n));
}

testSolution();
