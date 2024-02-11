// function getByValue(map: Map<number, number>, searchValue: number): number {
//     for (let [key, value] of map.entries()) {
//         if (value === searchValue)
//             return key;
//     }
// }

// function majorityElement(nums: number[]): number {
//     var unique = new Map()
//     for (var number of nums) {
//         if (unique.has(number)) unique.set(number, (unique.get(number) + .5))
//         else unique.set(number, 1)
//     }

//     var result = Array.from(unique.values())
//     result.sort(function (a, b) { return b - a })

//     return getByValue(unique, result[0])
// };

function majorityElement(nums: number[]): number {
    let candidate;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1
    }
    
    return candidate;
};
// console.log(majorityElement([3, 2, 3])); // expected 3
console.log(majorityElement([2,2,1,1,1,2,2])); // expected 2
