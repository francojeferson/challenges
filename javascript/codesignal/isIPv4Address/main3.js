const solution = (ip) => {
    const r = ip.split('.');

    return r.length === 4 && r.every(e => e && e < 256);
}

module.exports = solution
