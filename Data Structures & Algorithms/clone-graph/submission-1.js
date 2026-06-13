/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        // const visited = new Set();

        // function dfs(node) {

        //     if (visited.has(node)) {
        //         return;
        //     }

        //     visited.add(node);

        //     console.log(node.val);

        //     for (const neighbor of node.neighbors) {
        //         dfs(neighbor);
        //     }
        // }

        // dfs(node);

        if (node === null) {
            return null;
        }

        const oldToNew = new Map();

        function dfs(node) {
            if (oldToNew.has(node)) {
                return oldToNew.get(node);
            }

            const copy = new Node(node.val);
            oldToNew.set(node, copy);

            for (const neighbor of node.neighbors) {
                const neighborCopy = dfs(neighbor);
                copy.neighbors.push(neighborCopy);
            }

            return copy;
        }

        return dfs(node);
    }
}
