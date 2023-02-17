const solution = require('./main')

describe('chessBoardCellColor', () => {
    it('should return true for cell1: "A1" cell2: "C3"', () => {
        expect(solution('A1', 'C3')).toBe(true)
    })

    it('should return false for cell1: "A1" cell2: "H3"', () => {
        expect(solution('A1', 'H3')).toBe(false)
    })

    it('should return false for cell1: "A1" cell2: "A2"', () => {
        expect(solution('A1', 'A2')).toBe(false)
    })

    it('should return true for cell1: "A1" cell2: "B2"', () => {
        expect(solution('A1', 'B2')).toBe(true)
    })

    it('should return false for cell1: "B3" cell2: "H8"', () => {
        expect(solution('B3', 'H8')).toBe(false)
    })

    it('should return false for cell1: "C3" cell2: "B5"', () => {
        expect(solution('C3', 'B5')).toBe(false)
    })

    it('should return true for cell1: "G5" cell2: "E7"', () => {
        expect(solution('G5', 'E7')).toBe(true)
    })

    it('should return false for cell1: "C8" cell2: "H8"', () => {
        expect(solution('C8', 'H8')).toBe(false)
    })

    it('should return true for cell1: "D2" cell2: "D2"', () => {
        expect(solution('D2', 'D2')).toBe(true)
    })

    it('should return false for cell1: "A2" cell2: "A5"', () => {
        expect(solution('A2', 'A5')).toBe(false)
    })
})
