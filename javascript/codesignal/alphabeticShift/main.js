function solution(inputString) {
    return inputString
        .split('')
        .map(char => char.charCodeAt(0) === 122 ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');
}

module.exports = solution;
