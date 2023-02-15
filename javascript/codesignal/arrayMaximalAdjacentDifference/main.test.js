const solution = require('./main')

describe('arrayMaximalAdjacentDifference', () => {
    it('should return 3 for inputArray: [2, 4, 1, 0]', () => {
        expect(solution([2, 4, 1, 0])).toBe(3)
    })

    it('should return 0 for inputArray: [1, 1, 1, 1]', () => {
        expect(solution([1, 1, 1, 1])).toBe(0)
    })

    it('should return 7 for inputArray: [-1, 4, 10, 3, -2]', () => {
        expect(solution([-1, 4, 10, 3, -2])).toBe(7)
    })

    it('should return 2 for inputArray: [10, 11, 13]', () => {
        expect(solution([10, 11, 13])).toBe(2)
    })

    it('should return 0 for inputArray: [-2, -2, -2, -2, -2]', () => {
        expect(solution([-2, -2, -2, -2, -2])).toBe(0)
    })

    it('should return 4 for inputArray: [-1, 1, -3, -4]', () => {
        expect(solution([-1, 1, -3, -4])).toBe(4)
    })

    it('should return 30 for inputArray: [-14, 15, -15]', () => {
        expect(solution([-14, 15, -15])).toBe(30)
    })
})
