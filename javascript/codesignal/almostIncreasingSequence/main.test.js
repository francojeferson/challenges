const solution = require('./main');

describe('almostIncreasingSequence', () => {
    it('should return false for sequence: [1, 3, 2, 1]', () => {
        expect(solution([1, 3, 2, 1])).toBe(false);
    });

    it('should return true for sequence: [1, 3, 2]', () => {
        expect(solution([1, 3, 2])).toBe(true);
    })

    it('should return false for sequence: [1, 2, 1, 2]', () => {
        expect(solution([1, 2, 1, 2])).toBe(false);
    })

    it('should return false for sequence: [3, 6, 5, 8, 10, 20, 15]', () => {
        expect(solution([3, 6, 5, 8, 10, 20, 15])).toBe(false);
    })

    it('should return false for sequence: [1, 1, 2, 3, 4, 4]', () => {
        expect(solution([1, 1, 2, 3, 4, 4])).toBe(false);
    })

    it('should return false for sequence: [1, 4, 10, 4, 2]', () => {
        expect(solution([1, 4, 10, 4, 2])).toBe(false);
    })

    it('should return true for sequence: [10, 1, 2, 3, 4, 5]', () => {
        expect(solution([10, 1, 2, 3, 4, 5])).toBe(true);
    })

    it('should return false for sequence: [1, 1, 1, 2, 3]', () => {
        expect(solution([1, 1, 1, 2, 3])).toBe(false);
    })

    it('should return true for sequence: [0, -2, 5, 6]', () => {
        expect(solution([0, -2, 5, 6])).toBe(true);
    })

    it('should return false for sequence: [1, 2, 3, 4, 5, 3, 5, 6]', () => {
        expect(solution([1, 2, 3, 4, 5, 3, 5, 6])).toBe(false);
    })

    it('should return false for sequence: [40, 50, 60, 10, 20, 30]', () => {
        expect(solution([40, 50, 60, 10, 20, 30])).toBe(false);
    })

    it('should return true for sequence: [1, 1]', () => {
        expect(solution([1, 1])).toBe(true);
    })

    it('should return true for sequence: [1, 2, 5, 3, 5]', () => {
        expect(solution([1, 2, 5, 3, 5])).toBe(true);
    })

    it('should return false for sequence: [1, 2, 5, 5, 5]', () => {
        expect(solution([1, 2, 5, 5, 5])).toBe(false);
    })

    it('should return false for sequence: [10, 1, 2, 3, 4, 5, 6, 1]', () => {
        expect(solution([10, 1, 2, 3, 4, 5, 6, 1])).toBe(false);
    })

    it('should return true for sequence: [1, 2, 3, 4, 3, 6]', () => {
        expect(solution([1, 2, 3, 4, 3, 6])).toBe(true);
    })

    it('should return true for sequence: [1, 2, 3, 4, 99, 5, 6]', () => {
        expect(solution([1, 2, 3, 4, 99, 5, 6])).toBe(true);
    })

    it('should return true for sequence: [123, -17, -5, 1, 2, 3, 12, 43, 45]', () => {
        expect(solution([123, -17, -5, 1, 2, 3, 12, 43, 45])).toBe(true);
    })

    it('should return true for sequence: [3, 5, 67, 98, 3]', () => {
        expect(solution([3, 5, 67, 98, 3])).toBe(true);
    })
});
