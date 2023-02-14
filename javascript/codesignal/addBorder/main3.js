solution = p => [(t = p[0].replace(/./g, '*') + '**'), ...p.map(v => `*${v}*`), t];

module.exports = solution;
