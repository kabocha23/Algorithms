// leetcode 543. Diameter of Binary Tree
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:
// Input: root = [1,2]
// Output: 1

// initialize a variable to keep track of the max distance
// create helper function for dfs
// base case: return 0 when node is null
// recursively call diameterCheck on left node and right node to get the distance between them
// set max distance variable to left+right if greater than previous max
// return max of left or right, then add 1 for the current node, to get the depth from this node
// call helper function on the root and return the max distance 
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

const diameterOfBinaryTree = (root: TreeNode | null): number => {
    let sol = 0;

    const diameterCheck = (node: TreeNode | null): number => {
        if(node === null) return 0;
        let left: number = diameterCheck(node.left);
        let right: number = diameterCheck(node.right);
        sol = Math.max(sol, left + right)
        
        return Math.max(left, right) + 1;
    }

    diameterCheck(root);
    return sol;
};