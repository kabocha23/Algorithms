// leetcode 235. Lowest Common Ancestor of a Binary Search Tree
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// Example 3:
// Input: root = [2,1], p = 2, q = 1
// Output: 2

// with a BST we can move to the node where we are not above or below both p and q values
// start at the root, if the root value is less than both q and p, move to root.left
// if the root value is greater than both q and p, move to root.right
// otherwise return the root

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
const lowestCommonAncestor = (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null => {
	while(root && p && q) {
        if(root.val > p.val && root.val > q.val) {
            root = root.left;
        } else if(root.val < p.val && root.val < q.val) {
            root = root.right;
        } else {
            break;
        }
    }
    return root;
};