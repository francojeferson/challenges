function solution(seq) {
    let bad = 0
    for (let i = 1; i < seq.length; i++) if (seq[i] <= seq[i - 1]) {
        bad++
        if (bad > 1) return false
        if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false
    }
    return true
}

module.exports = solution;
