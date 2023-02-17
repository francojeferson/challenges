function solution(inputString) {
    return inputString.replace(/[a-z]/g, function (x) {
        switch (x) {
            case 'z': return 'a';
            case 'Z': return 'A';
            default: return String.fromCharCode(1 + x.charCodeAt(0))
        }
    })
}

module.exports = solution;
