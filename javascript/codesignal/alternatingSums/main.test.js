const solution = require('./main');

describe('alternatingSums', () => {
    it('should return [180, 105] for a: [50, 60, 60, 45, 70]', () => {
        expect(solution([50, 60, 60, 45, 70])).toEqual([180, 105]);
    });

    it('should return [100, 50] for a: [100, 50]', () => {
        expect(solution([100, 50])).toEqual([100, 50]);
    })

    it('should return [80, 0] for a: [80]', () => {
        expect(solution([80])).toEqual([80, 0]);
    })

    it('should return [150, 150] for a: [100, 50, 50, 100]', () => {
        expect(solution([100, 50, 50, 100])).toEqual([150, 150]);
    })

    it('should return [150, 151] for a: [100, 51, 50, 100]', () => {
        expect(solution([100, 51, 50, 100])).toEqual([150, 151]);
    })
})
