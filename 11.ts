import debug from "./visualiser";

export default function plusOne(digits: number[]): number[] {
    var i = digits.length - 1
    while (i >= 0) {
        if (digits[i] != 9) {
            digits[i]++;
            break;
        }
        debug.showDebug({display: [{
            arrays: [digits],
            indieces: { i } as any
        }]})
        if (digits[i] == 9) digits[i] = 0
        i--
    }
    if(digits[0] == 0) digits = [1, ...digits]
    return digits
};