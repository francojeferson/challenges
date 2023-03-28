// This function takes in an integer n as an argument, which represents time in minutes. The function calculates the sum of digits for the hours and minutes components of the time separately.
// First, it uses Math.floor() to calculate the number of hours, represented by hours, and the number of minutes left over, represented by minutes.
// Then, the function initializes a variable sum to 0, before using two while loops to extract the digits in the hours and minutes components. In each iteration of the loop, it uses the modulus operator % to get the last digit, adds it to the sum variable, and then uses Math.floor() to remove the last digit.
// Finally, the function returns the sum of digits for the hours and minutes components combined.

function solution(n) {
    let hours = Math.floor(n / 60);
    let minutes = n % 60;
    let sum = 0;
    while (hours > 0) {
        sum += hours % 10;
        hours = Math.floor(hours / 10);
    }
    while (minutes > 0) {
        sum += minutes % 10;
        minutes = Math.floor(minutes / 10);
    }
    return sum;
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
