import { TreeNode } from "./binarytree"

function traverse(root: TreeNode | null): number[]{
    if (root === null) return []
    return [...traverse(root.left), root.val, ...traverse(root.right)]
}

function countNodes(root: TreeNode | null): number {
    if (root === null) return 0
    return countNodes(root.left) + countNodes(root.right)
}

function isSymmetric(root: TreeNode | null): boolean {
    var calcNulls: number = countNodes(root) * (-1)
    var arr: number[] = traverse(root)

    var calcNodes: number = calcNulls + arr.length
    
    var len = arr.length - 1
    if (calcNulls % 2 == 1) return false
    
    var l = 0, r = len
    var mid = Math.floor(len/2)

    while (l < mid && r > mid) {
        if (arr[l] != arr[r]) return false
        l++
        r--
    }

    return true
};
// [1,2,2,2,null,2], expected: false, Node count: 6, Null count: 1 
let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(2)
root.left.left = new TreeNode(2)
root.left.right = null
root.right.left = new TreeNode(2)

console.log(isSymmetric(root))