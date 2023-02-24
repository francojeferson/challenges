const solution = require('./main');

describe('extractEachKth', () => {
    it('should return [1, 2, 4, 5, 7, 8, 10] for inputArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] k: 3', () => {
        expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([1, 2, 4, 5, 7, 8, 10]);
    });

    it('should return [] for inputArray: [1, 1, 1, 1, 1] k: 1', () => {
        expect(solution([1, 1, 1, 1, 1], 1)).toEqual([]);
    });

    it('should return [1, 1, 1, 1] for inputArray: [1, 2, 1, 2, 1, 2, 1, 2] k: 2', () => {
        expect(solution([1, 2, 1, 2, 1, 2, 1, 2], 2)).toEqual([1, 1, 1, 1]);
    });

    it('should return [1, 2, 1, 2, 1, 2, 1, 2] for inputArray: [1, 2, 1, 2, 1, 2, 1, 2] k: 10', () => {
        expect(solution([1, 2, 1, 2, 1, 2, 1, 2], 10)).toEqual([1, 2, 1, 2, 1, 2, 1, 2]);
    });

    it('should return [2, 6, 10] for inputArray: [2, 4, 6, 8, 10] k: 2', () => {
        expect(solution([2, 4, 6, 8, 10], 2)).toEqual([2, 6, 10]);
    });
});
