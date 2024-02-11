export default function addBinary(a: string, b: string): string {
    var bigA = BigInt('0b' + a)
    var bigB = BigInt('0b' + b)
    var sum = bigA + bigB

    return sum.toString(2)
};