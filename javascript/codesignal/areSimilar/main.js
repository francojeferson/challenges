function solution(a, b) {
    if (a.join('') === b.join('')) return true;
    let array1 = [];
    let array2 = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            array1.push(a[i]);
            array2.push(b[i]);
        }
    }
    array2 = array2.reverse().join('');
    array1 = array1.join('');
    if (array1 === array2) return true;
    return false;
}

module.exports = solution;
