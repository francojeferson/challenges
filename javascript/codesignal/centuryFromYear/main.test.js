const solution = require('./main');

describe('solution', () => {
    test('year 1905 to be century 20', () => {
        expect(solution(1905)).toBe(20);
    });
    test('year 1700 to be century 17', () => {
        expect(solution(1700)).toBe(17);
    });
    test('year 1988 to be century 20', () => {
        expect(solution(1988)).toBe(20);
    });
    test('year 2000 to be century 20', () => {
        expect(solution(2000)).toBe(20);
    })
    test('year 2001 to be century 21', () => {
        expect(solution(2001)).toBe(21);
    })
    test('year 200 to be century 2', () => {
        expect(solution(200)).toBe(2);
    })
    test('year 374 to be century 4', () => {
        expect(solution(374)).toBe(4);
    })
    test('year 45 to be century 1', () => {
        expect(solution(45)).toBe(1);
    })
    test('year 8 to be century 1', () => {
        expect(solution(8)).toBe(1);
    })
});
