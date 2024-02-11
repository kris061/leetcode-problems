import { TreeNode } from "./binarytree"

function traverse(root: TreeNode | null, currentLevel: number): number {
    if (root === null) return currentLevel-1

    if (root?.left === null && root?.right === null) return currentLevel+1
    return Math.max(traverse(root?.left, currentLevel+1), traverse(root?.right, currentLevel+1))
}

function maxDepth(root: TreeNode | null): number {
    return root === null ? 0 : traverse(root, 0)
};
// [3,9,20,null,null,15,7]
let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.left.left = null
root.left.right = null
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(17)

console.log(maxDepth(root)) // expected: 3