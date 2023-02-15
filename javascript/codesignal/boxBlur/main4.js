function solution(image) {
    res = []
    for (i = 0; i < image.length; i++) {
        lst = []
        for (j = 0; j < image[i].length; j++) {
            if (i != 0 && i != image.length - 1 && j != 0 && j != image[i].length - 1) {
                upperSum = image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1]
                centerSum = image[i][j] + image[i][j + 1] + image[i][j - 1]
                lowerSum = image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1]
                lst.push(Math.floor((upperSum + centerSum + lowerSum) / 9))
            }
        }
        res.push(lst)
    }
    return res.filter(x => x.length != 0)
}

module.exports = solution
