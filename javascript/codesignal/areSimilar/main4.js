function solution(a, b) {
    sum = 0;
    for (i = 0; i < a.length; i++) { if (a[i] != b[i]) { sum++ } }
    a.sort(); b.sort();
    return a.toString() == b.toString() && sum < 3
}

module.exports = solution;
