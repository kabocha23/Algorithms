// leetcode 102. Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:
// Input: root = [1]
// Output: [[1]]
// Example 3:
// Input: root = []
// Output: []

// the goal is to return a nested array with each subarr containing all nodes of the same level
// so we traverse the tree recursively, keeping track of the level, starting with root as level 0
// each call will add 1 to level, and push the node.vsl to the subarr[level]
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

const levelOrder = (root: TreeNode | null): number[][] => {
    let sol: number[][] = [];
    
    const byLevel = (node: TreeNode | null, level: number): number[][] => {
        if(node === null) return sol;
        
        if(!sol[level]) sol.push([]);
        sol[level].push(node.val);
        
        byLevel(node.left, level + 1);
        byLevel(node.right, level + 1);
        return sol;
    }
    
    byLevel(root, 0);
    return sol;
};