const solution = require('./main');

describe('shapeArea', () => {
    it('should return 5 for n: 2', () => {
        expect(solution(2)).toBe(5);
    });

    it('should return 13 for n: 3', () => {
        expect(solution(3)).toBe(13);
    })

    it('should return 1 for n: 1', () => {
        expect(solution(1)).toBe(1);
    })

    it('should return 41 for n: 5', () => {
        expect(solution(5)).toBe(41);
    })

    it('should return 97_986_001 for n: 7000', () => {
        expect(solution(7000)).toBe(97_986_001);
    })

    it('should return 127_984_001 for n: 8000', () => {
        expect(solution(8000)).toBe(127_984_001);
    })

    it('should return 199_940_005 for n: 9999', () => {
        expect(solution(9999)).toBe(199_940_005);
    })

    it('should return 199_900_013 for n: 9998', () => {
        expect(solution(9998)).toBe(199_900_013);
    })

    it('should return 161_946_005 for n: 8999', () => {
        expect(solution(8999)).toBe(161_946_005);
    })

    it('should return 19801 for n: 100', () => {
        expect(solution(100)).toBe(19801);
    })
})
