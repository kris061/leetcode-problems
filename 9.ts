export default function searchInsert(nums: number[], target: number): number {
    var l = 0
    var r = nums.length - 1
    var mid = Math.floor((l+r) / 2)

    while(nums[mid] != target)
    {
        if (r <= l) break
        if (nums[mid] > target) r = mid - 1 < 0 ? 0 : mid - 1
        if (nums[mid] < target) l = mid + 1 > nums.length - 1 ? nums.length - 1 : mid + 1  
        mid = Math.floor((l+r) / 2)
    }

    return nums[mid] < target ? mid + 1 : mid;
};