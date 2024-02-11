export default function twoSum(nums: number[], target: number): number[] {
    for(var index = 0; index < nums.length; index++){
        for(var index2 = index + 1; index2 < nums.length; index2++){
            if((nums[index] + nums[index2] == target)) return [index, index2]
        }
    }
    return []
    
};
