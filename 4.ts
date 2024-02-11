export default function longestCommonPrefix(strs: string[]): string {
    var wynik: string = ""
    var shortest: number = Infinity
    var ref: string = ""

    for (var str of strs){
        if (str.length < shortest) {
            shortest = str.length 
            ref = str
        }
    }

    for (var i = 0; i < ref.length; i++) {
        var checker = strs.filter((word) => word[i] == ref[i])
        if (checker.length != strs.length) break;
        else wynik += ref[i]
    }

    return wynik
};