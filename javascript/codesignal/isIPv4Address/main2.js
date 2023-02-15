function solution(s) {
    let r = s.split(".")
    return r.length === 4 && r.every(x => x != "" && !isNaN(x) && x >= 0 && x < 256)
}

module.exports = solution
