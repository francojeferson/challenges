function solution(name) {
    return /^[a-z_]\w*$/i.test(name)
}

module.exports = solution
