const solution = require('./main');

describe('commonCharacterCount', () => {
    it('returns 3 for s1: "aabcc" s2: "adcaa"', () => {
        expect(solution('aabcc', 'adcaa')).toBe(3);
    });

    it('returns 4 for s1: "zzzz" s2: "zzzzzzz"', () => {
        expect(solution('zzzz', 'zzzzzzz')).toBe(4);
    })

    it('returns 3 for s1: "abca" s2: "xyzbac"', () => {
        expect(solution('abca', 'xyzbac')).toBe(3);
    })

    it('returns 0 for s1: "a" s2: "b"', () => {
        expect(solution('a', 'b')).toBe(0);
    })

    it('returns 1 for s1: "a" s2: "aaa"', () => {
        expect(solution('a', 'aaa')).toBe(1);
    })
});
