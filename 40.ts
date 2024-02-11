function traverse(word: string): string {
    var chars = new Map<string, number>()
    var index = 0
    var values: number[] = []

    for (var char of word) {
        if (chars.has(char)) values.push(chars.get(char))
        else {
            chars.set(char, index++)
            values.push(chars.get(char))
        }
    }

    return values.join('-')
}

function isIsomorphic(s: string, t: string): boolean {
    var left = traverse(s)
    var right = traverse(t)
    console.log(left);
    console.log(right);

    return left == right
};

// console.log(isIsomorphic("foo", "bar")) // EXPECTED: FALSE
// console.log(isIsomorphic("egg", "add")) // EXPECTED: TRUE
// console.log(isIsomorphic("paper", "title")) // EXPECTED: TRUE
console.log(isIsomorphic("abcdefghijklmnopqrstuvwxyzva", "abcdefghijklmnopqrstuvwxyzck")) // EXPECTED: FALSE
