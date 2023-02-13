function solution(n) {
    let str = n.toString();
    let firstHalf = str.slice(0, str.length / 2);
    let secondHalf = str.slice(str.length / 2);
    let firstHalfSum = firstHalf.split('').reduce((a, b) => a + parseInt(b), 0);
    let secondHalfSum = secondHalf.split('').reduce((a, b) => a + parseInt(b), 0);
    return firstHalfSum === secondHalfSum;
}

module.exports = solution;
