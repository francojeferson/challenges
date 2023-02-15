function solution(str) {
    let arr = str.split('.');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > 255 || isNaN(arr[i]) || arr.length != 4 || arr[i] == "")
            return false;
    }
    return true;
}

module.exports = solution
