function solution(s1, s2) {
    let a = s1.split(""), r = 0
    while (a.length) {
        let t = a.pop()
        if (s2.includes(t)) {
            r++
            s2 = s2.replace(t, "")
        }
    }
    return r
}

module.exports = solution;
