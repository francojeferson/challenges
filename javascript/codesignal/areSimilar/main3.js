function solution(A, B) {
    for (let r = [], i = 0; i < A.length; i++) if (A[i] != B[i]) r.push(A[i], B[i])
    return r.length < 5 && new Set(r).size < 3
}

module.exports = solution;
