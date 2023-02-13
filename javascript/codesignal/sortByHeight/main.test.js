const solution = require('./main');

describe('sortByHeight', () => {
    it('should return [-1, 150, 160, 170, -1, -1, 180, 190] when given a: [-1, 150, 190, 170, -1, -1, 160, 180]', () => {
        expect(solution([-1, 150, 160, 170, -1, -1, 180, 190])).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
    })

    it('should return [-1, -1, -1, -1, -1] when given a: [-1, -1, -1, -1, -1]', () => {
        expect(solution([-1, -1, -1, -1, -1])).toEqual([-1, -1, -1, -1, -1]);
    })

    it('should return [-1] when given a: [-1]', () => {
        expect(solution([-1])).toEqual([-1]);
    })

    it('should return [2, 2, 4, 9, 11, 16] when given a: [4, 2, 9, 11, 2, 16]', () => {
        expect(solution([4, 2, 9, 11, 2, 16])).toEqual([2, 2, 4, 9, 11, 16]);
    })

    it('should return [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2] when given a: [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]', () => {
        expect(solution([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1])).toEqual([1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]);
    })

    it('should return [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77] when given a: [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]', () => {
        expect(solution([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])).toEqual([1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]);
    })
})
