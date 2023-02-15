const solution = require('./main');

describe('areEquallyStrong', () => {
    it('should return true for yourLeft: 10 yourRight: 15 friendsLeft: 15 friendsRight: 10', () => {
        expect(solution(10, 15, 15, 10)).toBe(true);
    })

    it('should return true for yourLeft: 15 yourRight: 10 friendsLeft: 15 friendsRight: 10', () => {
        expect(solution(15, 10, 15, 10)).toBe(true);
    })

    it('should return false for yourLeft: 15 yourRight: 10 friendsLeft: 15 friendsRight: 9', () => {
        expect(solution(15, 10, 15, 9)).toBe(false);
    })

    it('should return true for yourLeft: 10 yourRight: 5 friendsLeft: 5 friendsRight: 10', () => {
        expect(solution(10, 5, 5, 10)).toBe(true);
    })

    it('should return false for yourLeft: 10 yourRight: 15 friendsLeft: 5 friendsRight: 20', () => {
        expect(solution(10, 15, 5, 20)).toBe(false);
    })

    it('should return true for yourLeft: 10 yourRight: 20 friendsLeft: 10 friendsRight: 20', () => {
        expect(solution(10, 20, 10, 20)).toBe(true);
    })

    it('should return true for yourLeft: 5 yourRight: 20 friendsLeft: 20 friendsRight: 5', () => {
        expect(solution(5, 20, 20, 5)).toBe(true);
    })

    it('should return false for yourLeft: 20 yourRight: 15 friendsLeft: 5 friendsRight: 20', () => {
        expect(solution(20, 15, 5, 20)).toBe(false);
    })

    it('should return true for yourLeft: 5 yourRight: 10 friendsLeft: 5 friendsRight: 10', () => {
        expect(solution(5, 10, 5, 10)).toBe(true);
    })

    it('should return false for yourLeft: 1 yourRight: 10 friendsLeft: 10 friendsRight: 0', () => {
        expect(solution(1, 10, 10, 0)).toBe(false);
    })

    it('should return false for yourLeft: 5 yourRight: 5 friendsLeft: 10 friendsRight: 5', () => {
        expect(solution(5, 5, 10, 10)).toBe(false);
    })

    it('should return false for yourLeft: 10 yourRight: 5 friendsLeft: 10 friendsRight: 6', () => {
        expect(solution(10, 5, 10, 6)).toBe(false);
    })

    it('should return true for yourLeft: 1 yourRight: 1 friendsLeft: 1 friendsRight: 1 return true', () => {
        expect(solution(1, 1, 1, 1)).toBe(true);
    })

    it('should return true for yourLeft: 0 yourRight: 10 friendsLeft: 10 friendsRight: 0 return true', () => {
        expect(solution(0, 10, 10, 0)).toBe(true);
    })
})
