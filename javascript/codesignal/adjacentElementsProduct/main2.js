function solution(arr) {
    return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]))
}

module.exports = solution;
