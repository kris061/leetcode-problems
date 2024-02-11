import { TreeNode } from "./binarytree";


function traverse(root: TreeNode | null, depth: number): { balanced: boolean, depth: number } {
    var leftSubtree: { balanced: boolean, depth: number }
    var rightSubtree: { balanced: boolean, depth: number }
    if (root === null) return { balanced: true, depth: depth - 1 }

    leftSubtree = traverse(root.left, depth + 1)
    if (!leftSubtree.balanced) return { balanced: false, depth: 0 }

    
    rightSubtree = traverse(root.right, depth + 1)

    var balanced = true

    if (Math.abs(leftSubtree.depth - rightSubtree.depth) > 1) balanced = false
    if (!rightSubtree.balanced) balanced = false
    return { balanced: balanced, depth: Math.max(leftSubtree.depth, rightSubtree.depth) }
}

function isBalanced(root: TreeNode | null): boolean {
    var res = traverse(root, 0)
    return res.balanced
};

console.log(isBalanced)