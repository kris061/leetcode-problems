function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(new RegExp("[^A-Z0-9]", "ig"), "");

    for (var i = 0, j = s.length - 1; i < j; i++, j--) {
        if (i > j) break
        if (s[i] != s[j]) return false
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))