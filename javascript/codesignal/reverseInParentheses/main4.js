r = /\((\w*)\)/g
f = solution = s => r.test(s) ? f(s.replace(r, (m, a) => Buffer(a).reverse())) : s

module.exports = solution;
