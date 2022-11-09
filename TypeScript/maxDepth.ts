// leetcode 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:
// Input: root = [1,null,2]
// Output: 2


// base case: return 0 if the node is null, return 1 when left and right are null
// call maxDepth recursively to keep traversing left and right, and add 1 for the current node
// return the max between left and right to get the deepest node

// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

const maxDepth = (root: TreeNode | null): number => {
    if(root === null) {
        return 0;
    }
    if(root.left == null && root.right == null) {
        return 1;
    }

    let left = 1 + maxDepth(root.left);
    let right = 1 + maxDepth(root.right);        

    return Math.max(left, right);
};