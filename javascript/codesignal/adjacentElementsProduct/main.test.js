const solution = require('./main');

describe('adjacentElementsProduct', () => {
    it('should return 21 for [3, 6, -2, -5, 7, 3]', () => {
        expect(solution([3, 6, -2, -5, 7, 3])).toBe(21);
    });

    it('should return 2 for [-1, -2]', () => {
        expect(solution([-1, -2])).toBe(2);
    })

    it('should return 6 for [5, 1, 2, 3, 1, 4]', () => {
        expect(solution([5, 1, 2, 3, 1, 4])).toBe(6);
    })

    it('should return 6 for [1, 2, 3, 0]', () => {
        expect(solution([1, 2, 3, 0])).toBe(6);
    })

    it('should return 50 for [9, 5, 10, 2, 24, -1, -48]', () => {
        expect(solution([9, 5, 10, 2, 24, -1, -48])).toBe(50);
    })

    it('should return 30 for [5, 6, -4, 2, 3, 2, -23]', () => {
        expect(solution([5, 6, -4, 2, 3, 2, -23])).toBe(30);
    })

    it('should return 6 for [4, 1, 2, 3, 1, 5]', () => {
        expect(solution([4, 1, 2, 3, 1, 5])).toBe(6);
    })

    it('should return -12 for [-23, 4, -3, 8, -12]', () => {
        expect(solution([-23, 4, -3, 8, -12])).toBe(-12);
    })

    it('should return 0 for [1, 0, 1, 0, 1000]', () => {
        expect(solution([1, 0, 1, 0, 1000])).toBe(0);
    })
})
