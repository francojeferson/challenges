const solution = require('./main')

describe('alphabeticShift', () => {
    test('should return "dsbaz" for inputString: "crazy"', () => {
        expect(solution('crazy')).toBe('dsbaz')
    })

    test('should return "a" for inputString: "z"', () => {
        expect(solution('z')).toBe('a')
    })

    test('should return "bbbbcccdde" for inputString: "aaaabbbccd"', () => {
        expect(solution('aaaabbbccd')).toBe('bbbbcccdde')
    })

    test('should return "gvaaz" for inputString: "fuzzy"', () => {
        expect(solution('fuzzy')).toBe('gvaaz')
    })

    test('should return "dpeftjhobm" for inputString: "codesignal"', () => {
        expect(solution('codesignal')).toBe('dpeftjhobm')
    })
})
