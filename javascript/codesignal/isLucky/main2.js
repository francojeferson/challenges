function solution(n) {
    let count = 0;
    n = String(n).split('').map(t => { return parseInt(t) });
    n.forEach((el, i) => { (i < n.length / 2) ? count += el : count -= el });
    return count == 0;
}

module.exports = solution;
