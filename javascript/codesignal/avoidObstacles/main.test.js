const solution = require('./main')

describe('avoidObstacles', () => {
    it('should return 4 for inputArray: [5, 3, 6, 7, 9]', () => {
        expect(solution([5, 3, 6, 7, 9])).toBe(4)
    })

    it('should return 4 for inputArray: [2, 3]', () => {
        expect(solution([2, 3])).toBe(4)
    })

    it('should return 7 for inputArray: [1, 4, 10, 6, 2]', () => {
        expect(solution([1, 4, 10, 6, 2])).toBe(7)
    })

    it('should return 6 for inputArray: [1000, 999]', () => {
        expect(solution([1000, 999])).toBe(6)
    })

    it('should return 3 for inputArray: [19, 32, 11, 23]', () => {
        expect(solution([19, 32, 11, 23])).toBe(3)
    })

    it('should return 6 for inputArray: [5, 8, 9, 13, 14]', () => {
        expect(solution([5, 8, 9, 13, 14])).toBe(6)
    })
})
