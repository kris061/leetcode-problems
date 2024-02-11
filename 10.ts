export default function lengthOfLastWord(s: string): number {
    var startCounting = false
    var counter = 0

    for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] != ' ') {
            startCounting = true
            counter++
        }
        else if (startCounting) return counter // s[i] == " "
    }
    
    return 0;
};