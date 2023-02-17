function solution(cell1, cell2) {
    let board = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8
    };

    const total1 = board[cell1[0]] + parseInt(cell1[1]);
    const total2 = board[cell2[0]] + parseInt(cell2[1]);

    return total1 % 2 === total2 % 2;

}

module.exports = solution;
