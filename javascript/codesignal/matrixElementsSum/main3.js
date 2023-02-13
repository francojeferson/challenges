function solution(m) {
    return m.map((i, ind) => i.map((j, indJ) => [...new Array(ind).keys()].every(k => m[k][indJ] > 0) ? j : 0).reduce((x, y) => x + y)).reduce((x, y) => x + y)
}

module.exports = solution;
