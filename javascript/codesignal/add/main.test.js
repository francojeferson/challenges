const solution = require('./main');

describe('add', function () {
    it('adds 1 + 2 to equal 3', function () {
        expect(solution(1, 2)).toEqual(3);
    });
    it('adds 0 + 1000 to equal 1000', function () {
        expect(solution(0, 1000)).toEqual(1000);
    })
    it('adds 2 + -39 to equal -37', function () {
        expect(solution(2, -39)).toEqual(-37);
    })
    it('adds 99 + 100 to equal 199', function () {
        expect(solution(99, 100)).toEqual(199);
    })
    it('adds -100 + 100 to equal 0', function () {
        expect(solution(-100, 100)).toEqual(0);
    })
    it('adds -1000 + -1000 to equal -2000', function () {
        expect(solution(-1000, -1000)).toEqual(-2000);
    })
})
