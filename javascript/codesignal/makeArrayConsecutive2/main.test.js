const solution = require('./main');

describe('makeArrayConsecutive2', () => {
    it('should return 3 for [6, 2, 3, 8]', () => {
        expect(solution([6, 2, 3, 8])).toBe(3);
    });

    it('should return 2 for [0, 3]', () => {
        expect(solution([0, 3])).toBe(2);
    })

    it('should return 0 for [5, 4, 6]', () => {
        expect(solution([5, 4, 6])).toBe(0);
    })

    it('should return 2 for [6, 3]', () => {
        expect(solution([6, 3])).toBe(2);
    })

    it('should return 0 for [1]', () => {
        expect(solution([1])).toBe(0);
    })
})
