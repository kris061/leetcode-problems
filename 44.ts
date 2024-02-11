import { BinaryTree, TreeNode } from "./binarytree";

function traverse(root: TreeNode | null): number[]{
    if (root === null) return []
    return [...traverse(root.left), root.val ,...traverse(root.right)]
}

function countNodes(root: TreeNode | null): number {
    return traverse(root) .length
};

var tree = new BinaryTree([1,2,3,4,5,6])
var binarytree = tree.buildTree()
console.log(countNodes(binarytree)); // EXPECTED: 6

