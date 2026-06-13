/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        const stack = [[root, 1]];
        let res = 0;

        while (stack.length > 0) {
            const cur = stack.pop();
            const node = cur[0];
            const depth = cur[1];

            if (node !== null) {
                res = Math.max(res, depth);
                stack.push([node.left, depth + 1]);
                stack.push([node.right, depth + 1]);
            }
        }

        return res;
        // if (root === null) {
        //     return 0;
        // }

        // return (1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right)));
    }
}
