const solution = require('./main');

describe('centuryFromYear', () => {
    it('year 1905 to be century 20', () => {
        expect(solution(1905)).toBe(20);
    });

    it('year 1700 to be century 17', () => {
        expect(solution(1700)).toBe(17);
    });

    it('year 1988 to be century 20', () => {
        expect(solution(1988)).toBe(20);
    });

    it('year 2000 to be century 20', () => {
        expect(solution(2000)).toBe(20);
    })

    it('year 2001 to be century 21', () => {
        expect(solution(2001)).toBe(21);
    })

    it('year 200 to be century 2', () => {
        expect(solution(200)).toBe(2);
    })

    it('year 374 to be century 4', () => {
        expect(solution(374)).toBe(4);
    })

    it('year 45 to be century 1', () => {
        expect(solution(45)).toBe(1);
    })

    it('year 8 to be century 1', () => {
        expect(solution(8)).toBe(1);
    })
});
