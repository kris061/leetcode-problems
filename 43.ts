function containsNearbyDuplicate(nums: number[], k: number): boolean {
    if (nums.length < 2) return false
    var unique = new Set<number>(nums)
    var len = nums.length
    // for (var i = 0; i < unique.size; i++) {
    //     const first_removed = nums.slice(nums.indexOf(unique[i]), len - 1)
    //     var j = first_removed.indexOf(unique[i])
        
    //     while (j < len) {
    //         if ((unique.has(nums[j])) && ((j - i) <= k)) return true
    //         j++
    //     }
    // }
    for (var num of unique) {
        const first_removed = nums.slice(nums.indexOf(num) + 1, len)
        var j = first_removed.indexOf(num)
        
        while (j < len) {
            if ((unique.has(nums[j])) && ((j - nums.indexOf(num)) <= k)) return true
            j++
        }
    }

    return false
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // EXPECTED: FALSE
// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // EXPECTED: TRUE
