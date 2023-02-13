const solution = require('./main');

describe('reverseInParentheses', () => {
    it('should return "rab" given inputString: "(bar)"', () => {
        expect(solution('(bar)')).toBe('rab');
    })

    it('should return "foorabbaz" given inputString: "foo(bar)baz"', () => {
        expect(solution('foo(bar)baz')).toBe('foorabbaz');
    })

    it('should return "foorabbazmilb" given inputString: "foo(bar)baz(blim)"', () => {
        expect(solution('foo(bar)baz(blim)')).toBe('foorabbazmilb');
    })

    it('should return "foobazrabblim" given inputString: "foo(bar(baz))blim"', () => {
        expect(solution('foo(bar(baz))blim')).toBe('foobazrabblim');
    })

    it('should return "" given inputString: ""', () => {
        expect(solution('')).toBe('');
    })

    it('should return "" given inputString: "()"', () => {
        expect(solution('()')).toBe('');
    })

    it('should return "cbadgfe" given inputString: "(abc)d(efg)"', () => {
        expect(solution('(abc)d(efg)')).toBe('cbadgfe');
    })
})
