export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export class BinaryTree {
    nums: (number | null)[]
    constructor(nums?: (number | null)[]) {
        this.nums = (nums === undefined ? [] : nums)
    }

    buildTree() {
        if (this.nums.length === 0) {
            return null;
        }
        let root = new TreeNode(this.nums[0]);
        let q = [root];
        let i = 1;
        while (i < this.nums.length) {
            let curr = q.shift();

            if (this.nums[i] !== null) {
                if (i < this.nums.length) {
                    curr.left = new TreeNode(this.nums[i++]);
                    q.push(curr.left);
                }
            } else i++

            if (this.nums[i] !== null) {
                if (i < this.nums.length) {
                    curr.right = new TreeNode(this.nums[i++]);
                    q.push(curr.right);
                }
            } else i++
        }
        return root;
    }

    printTree(root: TreeNode | null) {
        if (!root) {
            return;
        }
        this.printTree(root.left);
        console.log(root.val + " ");
        this.printTree(root.right);
    }
}
