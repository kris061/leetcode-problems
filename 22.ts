import { TreeNode } from "./binarytree";

function sortedArrayToBST(nums: number[]): TreeNode | null {
    // if (nums.length == 1) return new TreeNode(nums[0])
    // if (nums.length == 0) return null


    // var root = new TreeNode()
    // var len = nums.length
    // var m = Math.floor((0 + len)/2)
    // root.val = nums[m]
    // var larr = nums.slice(0, m)
    // var rarr = nums.slice(m+1, len)
    // var lnode = sortedArrayToBST(larr)
    // var rnode = sortedArrayToBST(rarr)
    // root.left = lnode
    // root.right = rnode
    
    return traverse(nums, 0, nums.length-1)
};

function traverse(nums: number[], l: number, r: number): TreeNode | null {
    if (l > r) return null

    var root = new TreeNode()
    
    var m = Math.floor((l + r)/2)
    root.val = nums[m]

    var lnode = traverse(nums, l, m-1)
    var rnode = traverse(nums, m+1, r)
    root.left = lnode
    root.right = rnode

    return root
};

console.log(sortedArrayToBST([-10,-3,0,5,9]))