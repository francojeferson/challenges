const solution = require('./main')

describe('evenDigitsOnly', () => {
    it('should return true for n: 248622', () => {
        expect(solution(248622)).toBe(true)
    })

    it('should return false for n: 642386', () => {
        expect(solution(642386)).toBe(false)
    })

    it('should return true for n: 248842', () => {
        expect(solution(248842)).toBe(true)
    })

    it('should return false for n: 1', () => {
        expect(solution(1)).toBe(false)
    })

    it('should return true for n: 8', () => {
        expect(solution(8)).toBe(true)
    })

    it('should return false for n: 2462487', () => {
        expect(solution(2462487)).toBe(false)
    })

    it('should return true for n: 468402800', () => {
        expect(solution(468402800)).toBe(true)
    })

    it('should return true for n: 2468428', () => {
        expect(solution(2468428)).toBe(true)
    })

    it('should return false for n: 5468428', () => {
        expect(solution(5468428)).toBe(false)
    })

    it('should return false for n: 7468428', () => {
        expect(solution(7468428)).toBe(false)
    })
})
