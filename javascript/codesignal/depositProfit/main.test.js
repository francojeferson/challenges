const solution = require('./main');

describe('Solution', () => {
    it('should return 3 for deposit: 100 rate: 20 threshold: 170', () => {
        expect(solution(100, 20, 170)).toBe(3);
    });

    it('should return 1 for deposit: 100 rate: 1 threshold: 101', () => {
        expect(solution(100, 1, 101)).toBe(1);
    });

    it('should return 6 for deposit: 1 rate: 100 threshold: 64', () => {
        expect(solution(1, 100, 64)).toBe(6);
    });

    it('should return 6 for deposit: 20 rate: 20 threshold: 50', () => {
        expect(solution(20, 20, 50)).toBe(6);
    });

    it('should return 4 for deposit: 50 rate: 25 threshold: 100', () => {
        expect(solution(50, 25, 100)).toBe(4);
    });
});
