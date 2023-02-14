function solution(inputString) {

    const occurrences = {};

    for (const o of inputString) {
        occurrences[o] = o in occurrences ? occurrences[o] + 1 : 1;
    }

    return Object.values(occurrences).filter(count => count % 2 === 1).length < 2;
}

module.exports = solution;
