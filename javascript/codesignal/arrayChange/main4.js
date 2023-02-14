s = 0
function solution(a) {
    a.map((v, i) => !i ? p = v : (t = p - (v - 1)) > 0 ? (s += t, p = v + t) : p = v)
    return s
}

module.exports = solution;
