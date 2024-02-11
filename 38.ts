function calculate(newNumber: number): boolean {
    if (newNumber === 1 || newNumber === 7) return true

    var toString = newNumber.toString()
    var stringlen = toString.length
    var sum = 0
    var i = 0
    while (i < stringlen) {
        sum += Math.pow(parseInt(toString[i]), 2) + 
        (toString[i+1] ? Math.pow(parseInt(toString[i+1]), 2) : 0)
        i += 2 
    }
    calculate(sum)
    return false
}

function isHappy(n: number): boolean {
    return calculate(n)
};

console.log(isHappy(2)); //EXPECTED: FALSE

