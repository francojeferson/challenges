function solution(s) {
    let ss = s.split("").sort(), r = 0
    while (ss.length) {
        let t = ss.shift()
        if (t === ss[0]) ss.shift()
        else r++
    }
    return r < 2
}

module.exports = solution;
