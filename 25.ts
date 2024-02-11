import { TreeNode, BinaryTree } from "./binarytree";

function traverse(root: TreeNode | null, currentSum: number, targetSum: number): boolean {
    if (root === null) return false
    if (root.left === null && root.right === null) {
        if (currentSum == targetSum) return true
    }
    var sumLeft = currentSum 
    var sumRight = currentSum

    if (root.left) sumLeft += root.left.val
    if (root.right) sumRight += root.right.val

    var left = traverse(root.left, sumLeft,  targetSum)
    var right = traverse(root.right, sumRight, targetSum)

    return left || right
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    var result = traverse(root, root?.val, targetSum)
    return result
};

var binTree = new BinaryTree([5,4,8,11,null,13,4,7,2,null,null,null,1])
var root = binTree.buildTree()
console.log(hasPathSum(root, 22))