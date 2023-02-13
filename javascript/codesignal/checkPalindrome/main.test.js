const solution = require('./main');

describe('checkPalindrome', () => {
    it('should return true for "aabaa"', () => {
        expect(solution('aabaa')).toBe(true);
    });

    it('should return false for "abac"', () => {
        expect(solution('abac')).toBe(false);
    });

    it('should return true for "a"', () => {
        expect(solution('a')).toBe(true);
    });

    it('should return false for "az"', () => {
        expect(solution('az')).toBe(false);
    });

    it('should return true for "abacaba"', () => {
        expect(solution('abacaba')).toBe(true);
    });

    it('should return true for "z"', () => {
        expect(solution('z')).toBe(true);
    });

    it('should return false for "aaabaaaa"', () => {
        expect(solution('aaabaaaa')).toBe(false);
    });

    it('should return false for "zzzazzazz"', () => {
        expect(solution('zzzazzazz')).toBe(false);
    })

    it('should return true for "hlbeeykoqqqqokyeeblh"', () => {
        expect(solution('hlbeeykoqqqqokyeeblh')).toBe(true);
    })

    it('should return true for "hlbeeykoqqqokyeeblh"', () => {
        expect(solution('hlbeeykoqqqokyeeblh')).toBe(true);
    })
})
