function solution(inputString) {
    return inputString == inputString.split('').reverse().join('');
}

module.exports = solution;
