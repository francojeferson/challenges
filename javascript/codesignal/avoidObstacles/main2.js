function solution(arr) {
    for (let n = 1; ; n++) if (arr.every(x => x % n)) return n
}

module.exports = solution
