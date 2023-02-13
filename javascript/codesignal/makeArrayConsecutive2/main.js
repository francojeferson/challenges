function solution(statues) {
    let min = Math.min(...statues);
    let max = Math.max(...statues);
    let count = 0;
    for (let i = min; i <= max; i++) {
        if (!statues.includes(i)) {
            count++;
        }
    }
    return count;
}

module.exports = solution;
