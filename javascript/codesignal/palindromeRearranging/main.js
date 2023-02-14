function solution(inputString) {
    const charCount = {};
    for (let i = 0; i < inputString.length; i++) {
        if (charCount[inputString[i]]) {
            charCount[inputString[i]]++;
        } else {
            charCount[inputString[i]] = 1;
        }
    }
    let oddCount = 0;
    for (let key in charCount) {
        if (charCount[key] % 2 === 1) {
            oddCount++;
        }
    }
    return oddCount <= 1;
}

module.exports = solution;
