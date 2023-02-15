function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    return [yourLeft, yourRight].filter(x => x == friendsLeft || x == friendsRight).length == 2
}

module.exports = solution
