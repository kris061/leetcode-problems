import { TreeNode } from "./binarytree"

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    var leftCheck = false
    var rightCheck = false
    if (p == null && q == null) return true
    if (p == null && q != null || p != null && q == null) return false
    if (p?.val != q?.val) return false

    leftCheck = isSameTree(p?.left, q?.left)
    rightCheck = isSameTree(p?.right, q?.right)
    return leftCheck && rightCheck
};

let root = new TreeNode(1)
root.left = null
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

let root2 = new TreeNode(1)
root2.left = null
root2.right = new TreeNode(2)
root2.right.left = new TreeNode(3)

console.log(isSameTree(root, root2))