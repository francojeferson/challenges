function solution(a) {
    return Math.max(...a.map((x, i) => Math.abs(x - a[i + 1])).slice(0, -1))
}

module.exports = solution
