const solution = require('./main')

describe('isIPv4Address', () => {
    it('should return true for inputString: "172.16.254.1"', () => {
        expect(solution('172.16.254.1')).toBe(true)
    })

    it('should return false for inputString: "172.316.254.1"', () => {
        expect(solution('172.316.254.1')).toBe(false)
    })

    it('should return false for inputString: ".254.255.0"', () => {
        expect(solution('.254.255.0')).toBe(false)
    })

    it('should return false for inputString: "1.1.1.1a"', () => {
        expect(solution('1.1.1.1a')).toBe(false)
    })

    it('should return false for inputString: "1"', () => {
        expect(solution('1')).toBe(false)
    })

    it('should return true for inputString: "0.254.255.0"', () => {
        expect(solution('0.254.255.0')).toBe(true)
    })

    it('should return false for inputString: "1.23.256.255"', () => {
        expect(solution('1.23.256.255')).toBe(false)
    })

    it('should return false for inputString: "1.23.256.."', () => {
        expect(solution('1.23.256..')).toBe(false)
    })

    it('should return false for inputString: "0..1"', () => {
        expect(solution('0..1')).toBe(false)
    })

    it('should return false for inputString: "64.233.161"', () => {
        expect(solution('64.233.161')).toBe(false)
    })

    it('should return false for inputString: "64.00.161"', () => {
        expect(solution('64.00.161')).toBe(false)
    })

    it('should return false for inputString: "01.233.161.132"', () => {
        expect(solution('01.233.161.132')).toBe(false)
    })

    it('should return false for inputString: "35..36.9.9"', () => {
        expect(solution('35..36.9.9')).toBe(false)
    })

    it('should return false for inputString: "1.1.1.1.1"', () => {
        expect(solution('1.1.1.1.1')).toBe(false)
    })

    it('should return false for inputString: "1.256.1"', () => {
        expect(solution('1.256.1')).toBe(false)
    })

    it('should return false for inputString: "a0.1.1.1"', () => {
        expect(solution('a0.1.1.1')).toBe(false)
    })

    it('should return false for inputString: "0.1.1.256"', () => {
        expect(solution('0.1.1.256')).toBe(false)
    })

    it('should return false for inputString: "129380129831213981.255.255.256"', () => {
        expect(solution('129380129831213981.255.255.256')).toBe(false)
    })

    it('should return false for inputString: "255.255.255.255abcdekjhf"', () => {
        expect(solution('255.255.255.255abcdekjhf')).toBe(false)
    })

    it('should return false for inputString: "7283728"', () => {
        expect(solution('7283728')).toBe(false)
    })

    it('should return false for inputString: "0..1.0.0"', () => {
        expect(solution('0..1.0.0')).toBe(false)
    })
})
