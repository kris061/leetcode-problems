function titleToNumber(columnTitle: string): number {
    const str = columnTitle.split("").reverse().join("");
    var result = 0
    for (var i = 0; i < str.length; i++) {
        const converted = str.charCodeAt(i)-64
        result += converted*26**(i)
    }
    return result
};

// const hash = {
//     "A": 1,
//     "B" : 2,"C" : 3,"D" : 4,"E" : 5,"F" : 6,"G" : 7,"H" : 8,"I" : 9,"J" : 10,"K" : 11,"L" : 12,"M" : 13,
//     "N" : 14,"O" : 15,"P" : 16,"Q" : 17,"R" : 18,"S" : 19,"T" : 20,"U" : 21,"V" : 22,"W": 23,"X" : 24,"Y" : 25,"Z": 26,
//   }
 
//   function titleToNumber(columnTitle: string): number {
//     const str = columnTitle.split("").reverse().join("");
//     let res = 0;

//     for (let i = 0; i < str.length; i++) {
//       const ch = str[i];
//       res += hash[ch]*26**(i);
//     }

//     return res;
//   };

console.log(titleToNumber("AB")) // EXPECTED: 27