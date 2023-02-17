function solution(cell1, cell2) {
    return (cell1.charCodeAt(0) + Number(cell1[1]) + cell2.charCodeAt(0) + Number(cell2[1])) % 2 == 0
}

module.exports = solution
