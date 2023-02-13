const solution = a =>
    (arr => a.map(val => ~val ? arr.shift() : -1))
        (a.filter(val => ~val).sort((a, b) => a - b));

module.exports = solution;
