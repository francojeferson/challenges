const solution = require('./main');

describe('palindromeRearranging', () => {
    it('should return true for inputString: "aabb"', () => {
        expect(solution('aabb')).toBe(true);
    })

    it('should return false for inputString: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"', () => {
        expect(solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')).toBe(false);
    })

    it('should return true for inputString: "abbcabb"', () => {
        expect(solution('abbcabb')).toBe(true);
    })

    it('should return true for inputString: "zyyzzzzz"', () => {
        expect(solution('zyyzzzzz')).toBe(true);
    })

    it('should return true for inputString: "zz"', () => {
        expect(solution('zz')).toBe(true);
    })

    it('should return true for inputString: "zaa"', () => {
        expect(solution('zaa')).toBe(true);
    })

    it('should return false for inputString: "abca"', () => {
        expect(solution('abca')).toBe(false);
    })

    it('should return false for inputString: "abcad"', () => {
        expect(solution('abcad')).toBe(false);
    })

    it('should return false for inputString: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa"', () => {
        expect(solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa')).toBe(false);
    })

    it('should return false for inputString: "abdhuierf"', () => {
        expect(solution('abdhuierf')).toBe(false);
    })
})
