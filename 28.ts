function maxProfit(prices: number[]): number {
    var highestProfit = 0
    var len = prices.length - 1
    var copy = []

    for (var number of prices) copy.push(number)
    copy.sort(function (a, b) { return a - b })

    var lowest = copy[0]
    var highest = copy[len]

    var closest = prices.lastIndexOf(lowest)
    var target = prices.indexOf(highest)
    if (closest < target) {
        for (var i = closest; i < len; i++) {
            var j = i+1, counter = 2
            while (true) {
                if (j > len) {
                    j = len
                    if ((prices[j] - prices[i]) > highestProfit) highestProfit = prices[j] - prices[i]
                    break
                }
                // console.log(`VALUE: ${prices[i]}(${i})`, `HOP: ${prices[j]}(${j})`, `DIFFERENCE: ${prices[j] - prices[i]}`)

                if ((prices[j] - prices[i]) > highestProfit) highestProfit = prices[j] - prices[i]
                j += counter

                counter++
            }
        }
    } else {
        for (var i = 0; i < len; i++) {
            var j = i+1, counter = 2
            while (true) {
                if (j > len) {
                    j = len
                    if ((prices[j] - prices[i]) > highestProfit) highestProfit = prices[j] - prices[i]
                    break
                }
                // console.log(`VALUE: ${prices[i]}(${i})`, `HOP: ${prices[j]}(${j})`, `DIFFERENCE: ${prices[j]} - ${prices[i]} = ${prices[j] - prices[i]}`)

                if ((prices[j] - prices[i]) > highestProfit) highestProfit = prices[j] - prices[i]
                j += counter

                counter++
            }
        }
    }
    return highestProfit
};

console.log(maxProfit([2,1,4,5,2,9,7])) // expected: 8