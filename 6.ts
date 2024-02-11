export default function removeDuplicates(nums: number[]): number {
    var ilen = nums.length
    if (ilen == 0) return 0
    for (var i = 0; i < ilen; i++)         //   1 u u 2 u u 3 u u  O(n^2)
        for (var j = i + 1; j < ilen; j++) //1  u u 2 u u 3 u u 
            if (nums[i] == nums[j]) nums[j] = undefined


    var res = 0
    nums.sort((a, b) => a - b) // O(ln n)

    for (var n of nums) // O(n)
        if (n != undefined) res++
    
    // O(n^2) + O(ln n) + O(n)

    return res
};

export default function removeDuplicates (nums: number[]): number {
    let k: number = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};