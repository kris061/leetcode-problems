export default function strStr(haystack: string, needle: string): number {
    var i = 0;
    var j = 0;
    var len = needle.length - 1

    while (i < haystack.length) {
        if (haystack[i] == needle[j]) {
            if (j == len) return i - len
            j++
        }
        else if (j > 0) {i-=j, j = 0 }
        i++
    }

    return -1
};
