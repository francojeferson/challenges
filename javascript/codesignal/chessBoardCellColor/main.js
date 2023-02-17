function solution(cell1, cell2) {
    const cell1Color = cell1[0].charCodeAt(0) % 2 === cell1[1] % 2;
    const cell2Color = cell2[0].charCodeAt(0) % 2 === cell2[1] % 2;
    return cell1Color === cell2Color;
}

module.exports = solution
