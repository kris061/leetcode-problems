function hammingWeight(n: number): number {
    var toString = n.toString(2)
    var counter = 0
    for (var bit of toString) counter += bit === '1' ? 1 : 0 
    return counter
};

console.log(hammingWeight(0b00000000000000000000000010000000))