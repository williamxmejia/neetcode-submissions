/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) {
            return null;
        }
        if (!head.next) {
            return head;
        }

        // No next? Return itself. This is a special case. This is the last element/new head.
        // Everything else will always return that special case/last element/new head.
        // We just have to make sure that each node we traverse inverts where it points.

        let endHead = this.reverseList(head.next);
        head.next.next = head;
        head.next = null;

        return endHead;
    }
}
