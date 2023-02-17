function solution(n) {
    while (n > 0) {
        if ((n % 10) % 2 == 1) {
            return false
        }
        n = Math.floor(n / 10)
    }
    return true
}

module.exports = solution
