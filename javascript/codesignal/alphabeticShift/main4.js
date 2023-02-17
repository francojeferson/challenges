const solution = inputString =>
    inputString.replace(/[a-z]/g, val => String.fromCharCode(val < `z` ? val.charCodeAt() + 1 : 97));

module.exports = solution;
