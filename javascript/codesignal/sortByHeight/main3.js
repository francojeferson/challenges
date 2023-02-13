function solution(a) {
    let filtered = a.filter(val => val !== -1)
    let sorted = filtered.sort((a, b) => a - b)
    return a.map(val => val === -1 ? -1 : sorted.shift())
}

module.exports = solution;
