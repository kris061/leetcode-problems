import { TreeNode } from "./binarytree";

function compare(n1: number, n2: number): number {
    return n1 < n2 ? n1 : n2
}

function traverse(root: TreeNode | null): number {
    if (root?.left === null && root.right === null) return 1
    var left: number = Infinity
    var right: number = Infinity
    if (root?.left) left = traverse(root.left)+1
    if (root?.right) right = traverse(root.right)+1

    // if (root.left === null) return right
    // if (root.right === null) return left
    return Math.min(left, right)
}

function minDepth(root: TreeNode | null): number {
    var findMinDepth = traverse(root)
    return findMinDepth
};

// [2,null,3,null,4,null,5,null,6]
var n0 = new TreeNode(2)
var n1 = new TreeNode(9)
var n2 = new TreeNode(20)
var n3 = null
var n4 = null
var n5 = new TreeNode(15)
var n6 = new TreeNode(7)

n0.left = n1
n0.right = n2
n1.left = n3
n1.right = n4
n2.left = n5
n2.right = n6


console.log(minDepth(n0)) // expected: 2