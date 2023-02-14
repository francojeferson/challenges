function solution(a) {
    let res = [0, 0]
    for (let i in a) {
        res[i % 2] += a[i]
    }
    return res
}

module.exports = solution;
