// leetcode 226. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]


// base case: look at current root, if null return null
// this will tell us when root.left or root.right are null
// switch left and right with a temp variable
// recursively call itself for left and right nodes
// return the root

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

const invertTree = (root: TreeNode | null): TreeNode | null => {
   if(!root) return null;
   
   let temp: TreeNode | null = root.left;
   root.left = root.right;
   root.right = temp;
   
   invertTree(root.left);
   invertTree(root.right);
   
   return root;
};