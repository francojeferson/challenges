function solution(n) {
    let a = (n + "").split(""), half = a.length / 2, l = 0, r = 0
    while (a.length > half) r += +a.pop()
    while (a.length) l += +a.pop()
    return l === r
}

module.exports = solution;
