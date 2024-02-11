// export default function romanToInt(s: string): number {
//     var tlrn: string[] = [] // temporary last roman number
//     var nlen: number = s.length // roman number length

//     const rnc = [ // roman number combinations
//         { "comb": ["I", "V"], "value": 4 },
//         { "comb": ["I", "X"], "value": 9 },
//         { "comb": ["X", "L"], "value": 40 },
//         { "comb": ["X", "C"], "value": 90 },
//         { "comb": ["C", "D"], "value": 400 },
//         { "comb": ["C", "M"], "value": 900 },
//     ]
//     const rncl: number = rnc.length // roman number combinations length

//     var result = 0
//     var i = 0

//     while (i < nlen) {
//         tlrn.push(s[i])
//         if (i > 0 && s[i] != s[i - 1]) {
//             for (var j = 0; j < rncl; j++) {
//                 console.log(tlrn, rnc[j].comb)
//                 console.log(`${tlrn.toString()} - ${rnc[j].comb.toString()}`, tlrn.toString() == rnc[j].comb.toString())
//                 if(tlrn.toString == rnc[j].comb.toString) {
//                     result += rnc[j].value
//                     tlrn = []
//                 }
//             }
//         }
//         i++
//     }

//     return result
// };

export default function romanToInt(s: string): number {
    var rnums = [
        { letter: "I", value: 1 },
        { letter: "V", value: 5 },
        { letter: "X", value: 10 },
        { letter: "L", value: 50 },
        { letter: "C", value: 100 },
        { letter: "D", value: 500 },
        { letter: "M", value: 1000 }
    ]

    var srencoded: number[] = []
    var rlen: number = s.length
    var rnlen: number = rnums.length

    for (var i = 0; i < rlen; i++) {
        for (var j = 0; j < rnlen; j++) {
            if (s[i] == rnums[j].letter) srencoded.push(rnums[j].value)
        }
    }

    var result: number = 0
    for (var o = 0; o < rlen; o++) {
        if (o != rlen - 1)
            if (srencoded[o] < srencoded[o + 1]) {
                result += (srencoded[o + 1] - srencoded[o])
                o++
            }
            else result += srencoded[o]
        else result += srencoded[o]
    }

    return result
};

// export default function romanToInt(s: string): number {
//     var result: number = 0
//     var encoded: number[] = []
//     var rnums = [
//         ["I", 1], ["V", 5],
//         ["X", 10], ["L", 50],
//         ["C", 100], ["D", 500], ["M", 1000]
//     ]

//     for (var i = 0; i < s.length; i++)
//         for (var j of rnums) if (s[i] == j[0]) encoded.push(j[1])

//     return result
// };
