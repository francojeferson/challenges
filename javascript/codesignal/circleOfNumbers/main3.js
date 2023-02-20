function solution(n, firstNumber) {
    let x = firstNumber + n / 2;
    return x >= n ? x - n : x;
}

module.exports = solution;
