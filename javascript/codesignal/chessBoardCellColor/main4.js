function solution(cell1, cell2) {
    let a = cell1[0].charCodeAt(), b = cell2[0].charCodeAt(), c = +cell1[1], d = +cell2[1]
    return (a + c) % 2 === (b + d) % 2
}

module.exports = solution
