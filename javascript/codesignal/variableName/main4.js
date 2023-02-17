function solution(name) {
    if (!isNaN(name[0])) {
        return false;
    }
    return name.split('').every(char => {
        if ((isNaN(parseInt(char, 10))) && ('_' !== char) && (char.toLowerCase() === char.toUpperCase())) {
            return false;
        }
        return true;
    });
}

module.exports = solution;
