const solution = require('./main')

describe('arrayReplace', () => {
    it('should return [3, 2, 3] for inputArray: [1, 2, 1] elemToReplace: 1 substitutionElem: 3', () => {
        expect(solution([1, 2, 1], 1, 3)).toEqual([3, 2, 3])
    })

    it('should return [1, 2, 0, 4, 5] for inputArray: [1, 2, 3, 4, 5] elemToReplace: 3 substitutionElem: 0', () => {
        expect(solution([1, 2, 3, 4, 5], 3, 0)).toEqual([1, 2, 0, 4, 5])
    })

    it('should return [10, 10, 10] for inputArray: [1, 1, 1] elemToReplace: 1 substitutionElem: 10', () => {
        expect(solution([1, 1, 1], 1, 10)).toEqual([10, 10, 10])
    })

    it('should return [1, 1, 1, 1, 1] for inputArray: [1, 2, 1, 2, 1] elemToReplace: 2 substitutionElem: 1', () => {
        expect(solution([1, 2, 1, 2, 1], 2, 1)).toEqual([1, 1, 1, 1, 1])
    })

    it('should return [1, 2, 1, 2, 1] for inputArray: [1, 2, 1, 2, 1] elemToReplace: 2 substitutionElem: 2', () => {
        expect(solution([1, 2, 1, 2, 1], 2, 2)).toEqual([1, 2, 1, 2, 1])
    })

    it('should return [9, 1] for inputArray: [3, 1] elemToReplace: 3 substitutionElem: 9', () => {
        expect(solution([3, 1], 3, 9)).toEqual([9, 1])
    })

    it('should return [10, 10] for inputArray: [10, 10] elemToReplace: 0 substitutionElem: 9', () => {
        expect(solution([10, 10], 0, 9)).toEqual([10, 10])
    })

    it('should return [2, 1] for inputArray: [2, 1] elemToReplace: 3 substitutionElem: 9', () => {
        expect(solution([2, 1], 3, 9)).toEqual([2, 1])
    })
})
