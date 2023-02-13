function solution(sequence) {
    return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length
}

module.exports = solution;
