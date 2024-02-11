function generate(numRows: number): number[][] {
    var pyramid: number[][] = [[1]]
    if (numRows === 1) return pyramid
    var level = 1
    while (level < numRows) {
        var index = 0
        const newRow: number[] = []
       while (index < level + 1) {
        var left = pyramid[level - 1][index - 1] ?? 0
        var right =  pyramid[level - 1][index] ?? 0
        newRow.push(left + right)
        index++
       }
        level++
        pyramid.push(newRow)
    }

    return pyramid
};

function getRow(rowIndex: number): number[] {
    var pyramid: number[][] = [[1]]
    var level = 1
    while (level <= rowIndex) {
        var index = 0
        const newRow: number[] = []
       while (index < level + 1) {
        var left = pyramid[level - 1][index - 1] ?? 0
        var right =  pyramid[level - 1][index] ?? 0
        newRow.push(left + right)
        index++
       }
        level++
        pyramid.push(newRow)
    }

    return pyramid[rowIndex]
};

console.log(getRow(3)) // expected: [1,3,3,1]