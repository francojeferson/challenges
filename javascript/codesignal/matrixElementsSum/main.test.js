const solution = require('./main');

describe('matrixElementsSum', () => {
    it('should return 9 for matrix: [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]', () => {
        expect(solution([
            [0, 1, 1, 2],
            [0, 5, 0, 0],
            [2, 0, 3, 3]])).toBe(9);
    });

    it('should return 9 for matrix: [[1,1,1,0], [0,5,0,1], [2,1,3,10]]', () => {
        expect(solution([
            [1, 1, 1, 0],
            [0, 5, 0, 1],
            [2, 1, 3, 10]])).toBe(9);
    })

    it('should return 18 for matrix: [[1,1,1], [2,2,2], [3,3,3]]', () => {
        expect(solution([
            [1, 1, 1],
            [2, 2, 2],
            [3, 3, 3]])).toBe(18);
    })

    it('should return 0 for matrix: [[0]]', () => {
        expect(solution([[0]])).toBe(0);
    })

    it('should return 5 for matrix: [[1,0,3], [0,2,1], [1,2,0]]', () => {
        expect(solution([
            [1, 0, 3],
            [0, 2, 1],
            [1, 2, 0]])).toBe(5);
    })

    it('should return 6 for matrix: [[1], [5], [0], [2]]', () => {
        expect(solution([
            [1],
            [5],
            [0],
            [2]])).toBe(6);
    })

    it('should return 15 for matrix: [[1,2,3,4,5]]', () => {
        expect(solution([
            [1, 2, 3, 4, 5]])).toBe(15);
    })

    it('should return 17 for matrix: [[2], [5], [10]]', () => {
        expect(solution([
            [2],
            [5],
            [10]])).toBe(17);
    })

    it('should return 15 for matrix: [[4,0,1], [10,7,0], [0,0,0], [9,1,2]]', () => {
        expect(solution([
            [4, 0, 1],
            [10, 7, 0],
            [0, 0, 0],
            [9, 1, 2]])).toBe(15);
    })

    it('should return 1 for matrix: [[1]]', () => {
        expect(solution([[1]])).toBe(1);
    })
});
