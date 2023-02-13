function solution(inputArray) {
    return inputArray.reduce((acc, value, index) => {
        const nextValue = inputArray[index + 1]
        const result = value * nextValue

        return result > acc ? result : acc
    }, -Infinity)
}

module.exports = solution;
