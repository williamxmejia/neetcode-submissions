// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let headToCopy = new Map();
        headToCopy.set(null, null);

        let cur = head;
        while (cur) {
            headToCopy.set(cur, new Node(cur.val));
            cur = cur.next;
        }

        cur = head;
        while (cur) {
            const copy = headToCopy.get(cur);
            copy.next = headToCopy.get(cur.next);
            copy.random = headToCopy.get(cur.random);

            cur = cur.next
        }

        return headToCopy.get(head);
    }
}
