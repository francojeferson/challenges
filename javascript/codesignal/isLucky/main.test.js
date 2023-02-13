const solution = require('./main');

describe('isLucky', () => {
    it('should return true if n: 1230', () => {
        expect(solution(1230)).toBe(true);
    });

    it('should return false if n: 239_017', () => {
        expect(solution(239_017)).toBe(false);
    });

    it('should return true if n: 134_008', () => {
        expect(solution(134_008)).toBe(true);
    })

    it('should return false if n: 10', () => {
        expect(solution(10)).toBe(false);
    })

    it('should return true if n: 11', () => {
        expect(solution(11)).toBe(true);
    })

    it('should return true if n: 1010', () => {
        expect(solution(1010)).toBe(true);
    })

    it('should return false if n: 261_534', () => {
        expect(solution(261_534)).toBe(false);
    })

    it('should return false if n: 100_000', () => {
        expect(solution(100_000)).toBe(false);
    })

    it('should return true if n: 999_999', () => {
        expect(solution(999_999)).toBe(true);
    })

    it('should return true if n: 123_321', () => {
        expect(solution(123_321)).toBe(true);
    })
});
