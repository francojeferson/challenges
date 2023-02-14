function solution(a) {
    let even = 0;
    let odd = 0;
    for (const val of a.entries()) {
        if (val[0] % 2 === 0) {
            even += val[1];
        } else {
            odd += val[1];
        }
    }
    return [even, odd];
}

module.exports = solution;
