export default function isPalindrome(x: number): boolean {
    const numberToString: string = x.toString()
    const numberLen = numberToString.length
    var i = 0, j = numberLen - 1
    
    if (numberLen == 1) return true
    while (i < j) {
        if (numberToString[i] != numberToString[j]) return false
        i += 1, j -= 1
    }
    return true
}
// export default function isPalindromeInt(x: number): boolean {
  
    
//     if (x < 10) return true
//     var liczba = 0, dzielnik = 10
//     while (i < j) {
//         if (numberToString[i] != numberToString[j]) return false
//         i += 1, j -= 1
//     }
//     return true
// }
export function isPalindromeInt(x: number): boolean {
    var L = x
    var NL = 0 

    while(L > 0){
        NL = NL * 10 + L % 10
        L = ~~(L / 10)
    }
    return x == NL
}
console.log(~~10.38)
isPalindromeInt(1001)