function solution(inputArray) {

    let jump = 1;
    let valid = true;

    while (true) {
        valid = true
        for (let i = 0; i < inputArray.length; i++) {
            //console.log(inputArray[i])
            if (inputArray[i] % jump === 0) {
                valid = false;
            }
        }
        if (valid === true) {
            return jump
        }
        jump++
    }
}

module.exports = solution;
