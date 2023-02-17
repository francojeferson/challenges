function solution(s) {
    let c = "abcdefghijklmnopqrstuvwxyza"
    return s.replace(/./g, x => c[c.indexOf(x) + 1])
}

module.exports = solution
