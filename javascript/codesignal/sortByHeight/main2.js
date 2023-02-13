function solution(a) {
    let s = a.filter(h => h > 0).sort((a, b) => a - b)
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }

        return -1;
    })
}

module.exports = solution;
