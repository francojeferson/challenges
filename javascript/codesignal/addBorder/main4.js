function solution(p) {
    return [e = "*".repeat(p[0].length + 2)].concat(p.map(i => "*" + i + "*"), e)
}

module.exports = solution;
