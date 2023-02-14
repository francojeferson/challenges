solution = a => a.reduce((p, v, i) => (p[i & 1] += v, p), [0, 0]);

module.exports = solution;
