const solution = require('./main');

describe('circleOfNumbers', () => {
    it('should return 7 for n: 10 firstNumber: 2', () => {
        expect(solution(10, 2)).toBe(7);
    });

    it('should return 2 for n: 10 firstNumber: 8', () => {
        expect(solution(10, 7)).toBe(2);
    });

    it('should return 3 for n: 4 firstNumber: 2', () => {
        expect(solution(4, 1)).toBe(3);
    });

    it('should return 0 for n: 6 firstNumber: 4', () => {
        expect(solution(6, 3)).toBe(0);
    });

    it('should return 15 for n: 18 firstNumber: 8', () => {
        expect(solution(18, 6)).toBe(15);
    });

    it('should return 4 for n: 12 firstNumber: 12', () => {
        expect(solution(12, 10)).toBe(4);
    });

    it('should return 14 for n: 18 firstNumber: 6', () => {
        expect(solution(18, 5)).toBe(14);
    });
});
