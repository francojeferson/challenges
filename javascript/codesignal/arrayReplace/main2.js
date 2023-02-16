function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(i => i == elemToReplace ? substitutionElem : i)
}

module.exports = solution
