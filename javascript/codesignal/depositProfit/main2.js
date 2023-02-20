function solution(deposit, rate, threshold) {
    return Math.ceil(Math.log(threshold / deposit) / Math.log(1 + rate / 100));
}

module.exports = solution;
