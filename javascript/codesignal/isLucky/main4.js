function solution(n) {
    let s = `${n}`;
    return [...s.substring(0, s.length / 2)].reduce((p, v) => p + ~~v, 0) === [...s.substring(s.length / 2)].reduce((p, v) => p + ~~v, 0)
}

module.exports = solution;
