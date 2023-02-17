const solution = require('./main')

describe('variableName', () => {
    it('should return true for name: "var_1__Int"', () => {
        expect(solution('var_1__Int')).toBe(true)
    })

    it('should return false for name: "qq-q"', () => {
        expect(solution('qq-q')).toBe(false)
    })

    it('should return false for name: "2w2"', () => {
        expect(solution('2w2')).toBe(false)
    })

    it('should return false for name: " variable"', () => {
        expect(solution(' variable')).toBe(false)
    })

    it('should return false for name: "va[riable0"', () => {
        expect(solution('va[riable0')).toBe(false)
    })

    it('should return true for name: "variable0"', () => {
        expect(solution('variable0')).toBe(true)
    })

    it('should return true for name: "a"', () => {
        expect(solution('a')).toBe(true)
    })

    it('should return true for name: "_Aas_23"', () => {
        expect(solution('_Aas_23')).toBe(true)
    })

    it('should return false for name: "a a_2"', () => {
        expect(solution('a a_2')).toBe(false)
    })

    it('should return false for name: "0ss"', () => {
        expect(solution('0ss')).toBe(false)
    })
})
