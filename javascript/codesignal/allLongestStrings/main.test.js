const solution = require('./main');

describe('allLongestStrings', () => {
    it('should return ["aba", "vcd", "aba"] when given inputArray:["aba", "aa", "ad", "vcd", "aba"]', () => {
        expect(solution(['aba', 'aa', 'ad', 'vcd', 'aba'])).toEqual(['aba', 'vcd', 'aba']);
    });

    it('should return ["aa"] when given inputArray:["aa"]', () => {
        expect(solution(['aa'])).toEqual(['aa']);
    })

    it('should return ["eeee", "abcd"] when given inputArray:["abc", "eeee", "abcd", "dcd"]', () => {
        expect(solution(['abc', 'eeee', 'abcd', 'dcd'])).toEqual(['eeee', 'abcd']);
    })

    it('should return ["zzzzzz", "abcdef", "aaaaaa"] when given inputArray:["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]', () => {
        expect(solution(['a', 'abc', 'cbd', 'zzzzzz', 'a', 'abcdef', 'asasa', 'aaaaaa'])).toEqual(['zzzzzz', 'abcdef', 'aaaaaa']);
    })

    it('should return ["varennyky"] when given inputArray:["enyky", "benyky", "yely", "varennyky"]', () => {
        expect(solution(['enyky', 'benyky', 'yely', 'varennyky'])).toEqual(['varennyky']);
    })

    it('should return ["abacaba"] when given inputArray:["abacaba", "abacab", "abac", "xxxxxx"]', () => {
        expect(solution(['abacaba', 'abacab', 'abac', 'xxxxxx'])).toEqual(['abacaba']);
    })

    it('should return ["yooooooung", "watermelon"] when given inputArray:["young", "yooooooung", "hot", "or", "not", "come", "on", "fire", "water", "watermelon"]', () => {
        expect(solution(['young', 'yooooooung', 'hot', 'or', 'not', 'come', 'on', 'fire', 'water', 'watermelon'])).toEqual(['yooooooung', 'watermelon']);
    })

    it('should return ["aokbcwthc"] when given inputArray:["onsfnib", "aokbcwthc", "jrfcw"]', () => {
        expect(solution(['onsfnib', 'aokbcwthc', 'jrfcw'])).toEqual(['aokbcwthc']);
    })

    it('should return ["lbgwyqkry"] when given inputArray:["lbgwyqkry"]', () => {
        expect(solution(['lbgwyqkry'])).toEqual(['lbgwyqkry']);
    })

    it('should return ["i"] when given inputArray:["i"]', () => {
        expect(solution(['i'])).toEqual(['i']);
    })
});
