function solution(n) {
    return n.toString().split('').every((x) => x % 2 === 0);
}

module.exports = solution;
