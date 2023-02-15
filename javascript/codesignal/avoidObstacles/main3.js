function solution(inputArray) {
    let jump = 2;
    while (inputArray.some((obstacle) => obstacle % jump == 0)) {
        jump++;
    }
    return jump;
}

module.exports = solution
