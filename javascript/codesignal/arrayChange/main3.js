function solution(inputArray) {
    return inputArray.reduce(function (x, b, i, a) {
        while (b >= a[i + 1]) { x++; a[i + 1]++; };
        return x;
    }, 0)
}

module.exports = solution;
