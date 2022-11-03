// leetcode 110. Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:
// Input: root = []
// Output: true

// height balanced means the difference between the height of left and right are not greater than 1
// starting with case of null root, return true since no nodes for different height
// set boolean to track if heights become unbalanced
// helper function heightCheck
// if both left and right are null, return 0, not adding to height
// if there is a left node, call heightCheck recursively and add 1 to the height
// same for if there is a right node
// recursive call will traverse until no left and right nodes, then add 1 for every node on the way back up
// set overall tree height by taking lerger of left or right
// check if difference between left and right height are greater than 1
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

const isBalanced = (root: TreeNode | null): boolean => {
    if(root === null) return true;
    let balanced: boolean = true;
    
    const heightCheck = (root) => {
        if(root.left == null && root.right == null) {
            return 0;
        }
        
        let leftHeight: number = 0;
        let rightHeight: number = 0;
        
        if(root.left !== null) {
            leftHeight = 1 + heightCheck(root.left)
        }
        if(root.right !== null) {
            rightHeight = 1 + heightCheck(root.right)
        }
        
        let treeHeight: number = Math.max(leftHeight, rightHeight)
        
        if(Math.abs(leftHeight - rightHeight) > 1) balanced = false;
        return treeHeight;
    }
    
    heightCheck(root);
    return balanced;
};