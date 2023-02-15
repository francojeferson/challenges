const solution = image =>
    image.slice(1, -1).map(val => val.slice(1, -1)).map((val, i) => val.map((_, j) => [...Array(3).keys()].reduce((pre, x, _, arr) => pre + arr.reduce((pre, y) => pre + image[i + x][j + y], 0), 0) / 9 ^ 0));

module.exports = solution;
