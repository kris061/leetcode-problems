function singleNumber(nums: number[]): number {
    var counter = 0
    const len = nums.length
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (nums[i] == nums[j]) counter++;
            if (counter > 1) { counter = 0; break }
        }
        if (counter == 1) return nums[i]
    }
    return 0
};

console.log(singleNumber([4,1,2,1,2])) // expected: 4
