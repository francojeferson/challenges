const solution = require('./main');

describe('stringsRearrangement', () => {
    it('should return false for inputArray:["aba", "bbb", "bab"]', () => {
        expect(solution([
            'aba',
            'bbb',
            'bab'
        ])).toBe(false);
    });

    it('should return true for inputArray:["ab", "bb", "aa"]', () => {
        expect(solution([
            'ab',
            'bb',
            'aa'
        ])).toBe(true);
    });

    it('should return false for inputArray:["q", "q"]', () => {
        expect(solution([
            'q',
            'q'
        ])).toBe(false);
    });

    it('should return true for inputArray:["zzzzab", "zzzzbb", "zzzzaa"]', () => {
        expect(solution([
            'zzzzab',
            'zzzzbb',
            'zzzzaa'
        ])).toBe(true);
    });

    it('should return false for inputArray:["ab", "ad", "ef", "eg"]', () => {
        expect(solution([
            'ab',
            'ad',
            'ef',
            'eg'
        ])).toBe(false);
    });

    it('should return true for inputArray:["abc", "bef", "bcc", "bec", "bbc", "bdc"]', () => {
        expect(solution([
            'abc',
            'bef',
            'bcc',
            'bec',
            'bbc',
            'bdc'
        ])).toBe(true);
    });

    it('should return false for inputArray:["abc", "abx", "axx", "abc"]', () => {
        expect(solution([
            'abc',
            'abx',
            'axx',
            'abc'
        ])).toBe(false);
    });

    it('should return true for inputArray:["abc", "abx", "axx", "abx", "abc"]', () => {
        expect(solution([
            'abc',
            'abx',
            'axx',
            'abx',
            'abc'
        ])).toBe(true);
    });

    it('should return true for inputArray:["f", "g", "a", "h"]', () => {
        expect(solution([
            'f',
            'g',
            'a',
            'h'
        ])).toBe(true);
    });

    it('should return true for inputArray:["ff", "gf", "af", "ar", "hf"]', () => {
        expect(solution([
            'ff',
            'gf',
            'af',
            'ar',
            'hf'
        ])).toBe(true);
    });

    it('should return true for inputArray:["a", "b", "c"]', () => {
        expect(solution([
            'a',
            'b',
            'c'
        ])).toBe(true);
    });
});
