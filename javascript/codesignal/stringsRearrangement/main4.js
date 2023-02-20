function solution(inputArray) {
    let answer = [];
    permute(inputArray, inputArray.length, answer);
    console.log(answer);
    let result = false;
    for (let i = 0; i < answer.length; i++) {
        for (let j = 1; j < answer[i].length; j++) {
            if (arrayTest(answer[i][j], answer[i][j - 1]) == false) {
                console.log(answer[i][j]);
                break;
            }
            if (j == answer[i].length - 1) {
                return true;
            }
        }
    }
    return false;

}

function arrayTest(str1, str2) {
    if (str1 === str2) {
        return false;
    }
    let test = false;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] != str2[i]) {
            if (test == false) {
                test = true;
            } else {
                return false;

            }
        }
    }

    return test;
}

function permute(array, k, answer) {
    if (k === 1) {
        answer.push([...array]);

    } else {
        for (let i = 0; i < k; i++) {
            permute(array, k - 1, answer);
            if (k % 2) {
                let x = array[i];
                array[i] = array[k - 1];
                array[k - 1] = x;
            } else {
                x = array[0];
                array[0] = array[k - 1];
                array[k - 1] = x;
            }
        }
    }
}

module.exports = solution;
