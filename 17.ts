class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function displayBinaryTree(root: TreeNode | null): number[] {
    if (root === null) return []
    return [...displayBinaryTree(root.left), root.val, ...displayBinaryTree(root.right)]
}

let root = new TreeNode(1)
root.left = null
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

displayBinaryTree(root)