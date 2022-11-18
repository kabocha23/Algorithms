// leetcode 98. Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [2,1,3]
// Output: true
// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// create a helper function to recursively traverse the BST, taking a node, a min and a max
// base case is to return true when node is null
// otherwise the first check will check node.val is between -Infinity and Infinity
// then during the return, the recursive calls will look left and right, using the prev node as the lower or upper bound:
// look left, setting prev node to max bound: if left node is greater than previous node, return false
// look right, setting prev node to min: if right node is less than previous node, return false

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

const isValidBST = (root: TreeNode | null): boolean => {
    const bstCheck = (node: TreeNode | null, min: number, max: number): boolean => {
        if(!node) return true;
        
        if(node.val <= min) return false;
        if(node.val >= max) return false;
        
        return bstCheck(node.left, min, node.val) && bstCheck(node.right, node.val, max);
    }
    return bstCheck(root, -Infinity, Infinity)
};
