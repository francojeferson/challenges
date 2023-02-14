function solution(picture) {
    let result = [];
    let border = '*'.repeat(picture[0].length + 2);
    result.push(border);
    for (let i = 0; i < picture.length; i++) {
        result.push('*' + picture[i] + '*');
    }
    result.push(border);
    return result;
}

module.exports = solution;
