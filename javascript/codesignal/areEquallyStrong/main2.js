function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    let me = [yourLeft, yourRight].sort().join("");
    let friend = [friendsLeft, friendsRight].sort().join("");

    return me === friend;
}

module.exports = solution;
