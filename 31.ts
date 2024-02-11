// ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S","T", "U", "V",, "W", "X", "Y", "Z",]

// var alphabet =
//     ["A", "B", "C",
//     "D", "E", "F",
//     "G", "H", "I",
//     "J", "K", "L",
//     "M", "N", "O",
//     "P", "Q", "R",
//     "S", "T", "U",
//     "V", "W", "X",
//     "Y", "Z"]

// function calculate(columnNumber: number): string {
//     var tempArr = [1]
//     for (var i = 1; i < columnNumber; i++) {
//         if (tempArr[0] > 26) {
//             for (var j = 1; j <= tempArr.length; j++) {
//                 if (tempArr[j] === undefined) {
//                     tempArr = [...tempArr, 1]
//                     tempArr[0] = 1
//                     break;
//                 }

//                 else {
//                     tempArr[j] += 1
//                     tempArr[0] = 1
//                     break;
//                 }
//             }
//         }
//         else tempArr[0]++
//     }
//     tempArr = tempArr.reverse()
//     var tempArrLen = tempArr.length - 1
//     if (tempArr[tempArrLen] == 27) {
//         tempArr[tempArrLen - 1] += 1
//         tempArr[tempArrLen] = 1
//     }

//     var stringified = ""
//     for (var letter of tempArr) stringified += alphabet[letter]
//     return stringified
// }

// function convertToTitle(columnNumber: number): string {
//     var columnIndexes = calculate(columnNumber)
//     return columnIndexes
// };

function convertToTitle(columnNumber: number): string {
    var str:string = ''
    var nums = 0

    while (columnNumber > 0) {
        nums = (columnNumber-1)%26
        str = String.fromCharCode(nums+65)+str
        columnNumber = Math.floor((columnNumber - nums)/26)
    }
    return str
};




console.log(convertToTitle(2081)) // expected: AAA
// console.log(titleToNumber("AA")) // expected: 27
// console.log(convertToTitle(701)) // expected: ZY
// console.log(convertToTitle(54)) // expected: BA