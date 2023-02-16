function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map((item) => {
        if (item === elemToReplace) {
            return substitutionElem;
        }
        return item;
    });
}

module.exports = solution
