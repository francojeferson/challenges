function solution(inputArray) {
    return inputArray.sort((a, b) => a.length < b.length)
        .filter((val, index, list) => {
            return (val.length == list[0].length)
        })
}

module.exports = solution;
