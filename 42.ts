function containsDuplicate(nums: number[]): boolean {
    var unique = new Set<number>([])

    for (var num of nums) {
        if (unique.has(num)) return true
        else unique.add(num)
    }

    return false
};

console.log(containsDuplicate([1,2,3,1]));
