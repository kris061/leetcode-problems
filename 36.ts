function reverseBits(n: number): number {
    return parseInt(( ('0'.repeat(Math.clz32(n)) + n.toString(2)).split('').reverse().join('') ), 2)
};

// function reverseBits(n) {
//     if (!n) return 0
    
//     let ans = 0;
  
//     for (let i = 0; i < 32; i++) {
//       ans = ans * 2 + (n & 1);
//       n >>>= 1;
//     }
  
//     return ans;
//   }

console.log(reverseBits(0b00000010100101000001111010011100)) // expected: 00111001011110000010100101000000 (964176192)
