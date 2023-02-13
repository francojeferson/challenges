function solution(inputString) {
    const regex = /[^a-zA-Z0-9]/g
    procString = inputString.toLowerCase().replace(regex, '')
    integCheck = procString.split('').reverse().join('')
    if (procString === integCheck) return true
    else return false
}

module.exports = solution;
