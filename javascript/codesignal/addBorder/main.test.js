const solution = require('./main');

describe('addBorder', () => {
    it('should return ["*****", "*abc*", "*ded*", "*****"] for picture:["abc", "ded"]', () => {
        expect(solution([
            "abc",
            "ded"
        ])).toEqual([
            "*****",
            "*abc*",
            "*ded*",
            "*****"
        ]);
    })

    it('should return ["***", "*a*", "***"] for picture:["a"]', () => {
        expect(solution([
            "a"
        ])).toEqual([
            "***",
            "*a*",
            "***"
        ]);
    })

    it('should return ["****", "*aa*", "****", "*zz*", "****"] for picture:["aa", "**", "zz"]', () => {
        expect(solution([
            "aa",
            "**",
            "zz"
        ])).toEqual([
            "****",
            "*aa*",
            "****",
            "*zz*",
            "****"
        ]);
    })

    it('should return ["*******", "*abcde*", "*fghij*", "*klmno*", "*pqrst*", "*uvwxy*", "*******"] for picture:["abcde", "fghij", "klmno", "pqrst", "uvwxy"]', () => {
        expect(solution([
            "abcde",
            "fghij",
            "klmno",
            "pqrst",
            "uvwxy"
        ])).toEqual([
            "*******",
            "*abcde*",
            "*fghij*",
            "*klmno*",
            "*pqrst*",
            "*uvwxy*",
            "*******"
        ]);
    })

    it('should return ["*******", "*wzy***", "*******"] for picture:["wzy**"]', () => {
        expect(solution([
            "wzy**"
        ])).toEqual([
            "*******",
            "*wzy***",
            "*******"
        ]);
    })
})
