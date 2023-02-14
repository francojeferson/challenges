const solution = require('./main');

describe('areSimilar', () => {
    it('should return true for a: [1, 2, 3] b: [1, 2, 3]', () => {
        expect(solution(
            [1, 2, 3],
            [1, 2, 3]
        )).toBe(true);
    });

    it('should return true for a: [1, 2, 3] b: [2, 1, 3]', () => {
        expect(solution(
            [1, 2, 3],
            [2, 1, 3]
        )).toBe(true);
    })

    it('should return false for a: [1, 2, 2] b: [2, 1, 1]', () => {
        expect(solution(
            [1, 2, 2],
            [2, 1, 1]
        )).toBe(false);
    })

    it('should return true for a: [1, 2, 1, 2] b: [2, 2, 1, 1]', () => {
        expect(solution(
            [1, 2, 1, 2],
            [2, 2, 1, 1]
        )).toBe(true);
    })

    it('should return true for a: [1, 2, 1, 2, 2, 1] b: [2, 2, 1, 1, 2, 1]', () => {
        expect(solution(
            [1, 2, 1, 2, 2, 1],
            [2, 2, 1, 1, 2, 1]
        )).toBe(true);
    })

    it('should return false for a: [1, 1, 4] b: [1, 2, 3]', () => {
        expect(solution(
            [1, 1, 4],
            [1, 2, 3]
        )).toBe(false);
    })

    it('should return false for a: [1, 2, 3] b: [1, 10, 2]', () => {
        expect(solution(
            [1, 2, 3],
            [1, 10, 2]
        )).toBe(false);
    })

    it('should return true for a: [2, 3, 1] b: [1, 3, 2]', () => {
        expect(solution(
            [2, 3, 1],
            [1, 3, 2]
        )).toBe(true);
    })

    it('should return false for a: [2, 3, 9] b: [10, 3, 2]', () => {
        expect(solution(
            [2, 3, 9],
            [10, 3, 2]
        )).toBe(false);
    })

    it('should return false for a: [832, 998, 148, 570, 533, 561, 894, 147, 455, 279] b: [832, 570, 148, 998, 533, 561, 455, 147, 894, 279] ret false', () => {
        expect(solution(
            [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
            [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
        )).toBe(false);
    })
})
