const solution = require('./main')

describe('minesweeper', () => {
    it('returns [[1,2,1], [2,1,1], [1,1,1]] for matrix:[[true,false,false], [false,true,false], [false,false,false]]', () => {
        expect(solution([
            [true, false, false],
            [false, true, false],
            [false, false, false]
        ])).toEqual([
            [1, 2, 1],
            [2, 1, 1],
            [1, 1, 1]
        ])
    })

    it('returns [[0,0,0], [0,0,0]] for matrix:[[false,false,false], [false,false,false]]', () => {
        expect(solution([
            [false, false, false],
            [false, false, false]
        ])).toEqual([
            [0, 0, 0],
            [0, 0, 0]
        ])
    })

    it('returns [[0,2,2,1], [3,4,3,3], [1,2,3,1]] for matrix:[[true,false,false,true], [false,false,true,false], [true,true,false,true]]', () => {
        expect(solution([
            [true, false, false, true],
            [false, false, true, false],
            [true, true, false, true]
        ])).toEqual([
            [0, 2, 2, 1],
            [3, 4, 3, 3],
            [1, 2, 3, 1]
        ])
    })

    it('returns [[3,5,3], [5,8,5], [3,5,3]] for matrix:[[true,true,true], [true,true,true], [true,true,true]]', () => {
        expect(solution([
            [true, true, true],
            [true, true, true],
            [true, true, true]
        ])).toEqual([
            [3, 5, 3],
            [5, 8, 5],
            [3, 5, 3]
        ])
    })

    it('returns [[3,3,3,2], [2,4,5,2], [2,3,2,2]] for matrix:[[false,true,true,false], [true,true,false,true], [false,false,true,false]]', () => {
        expect(solution([
            [false, true, true, false],
            [true, true, false, true],
            [false, false, true, false]
        ])).toEqual([
            [3, 3, 3, 2],
            [2, 4, 5, 2],
            [2, 3, 2, 2]
        ])
    })

    it('returns [[1,2], [2,3], [2,1], [1,1], [0,0]] for matrix:[[true,false], [true,false], [false,true], [false,false], [false,false]]', () => {
        expect(solution([
            [true, false],
            [true, false],
            [false, true],
            [false, false],
            [false, false]
        ])).toEqual([
            [1, 2],
            [2, 3],
            [2, 1],
            [1, 1],
            [0, 0]
        ])
    })
})
