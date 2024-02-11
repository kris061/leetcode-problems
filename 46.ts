import { TreeNode, BinaryTree } from "./binarytree"; 

function invertTree(root: TreeNode | null): TreeNode | null {
    
    return root
};


var tree = new BinaryTree([4,2,7,1,3,6,9])
var binary_tree = tree.buildTree()

console.log(invertTree(binary_tree));
