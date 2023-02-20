const solution = a => {
    let distances = a.map(e => a.reduce((acc, cur) => acc + Math.abs(cur - e), 0));
    return a[distances.indexOf(Math.min(...distances))];
};

module.exports = solution;
