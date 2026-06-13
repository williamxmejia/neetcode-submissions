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

        // endHead is a constant, it's the end of the unreversed linked list
        let endHead = this.reverseList(head.next);
        head.next.next = head;

        // This is only ran in order to make the first element not point at the wrong thing
        if (head.next.next === head) {
            head.next = null;
        }

        return endHead;
    }
}
