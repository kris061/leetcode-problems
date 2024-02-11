export default function removeElement(nums: number[], val: number): number {
    var i = 0, j = 0, l = 0
    var len = nums.length
    var res = 0

    while (i < len) {
        if (j >= len) break
        if (nums[j] == val) j++
        else if (j > 0) {
            nums[i] = nums[j]
            nums[j] = val
            i++
            j++
        }
    }
    for (var el of nums) {
        if (el == val) break
        res++
    }
    return res
};