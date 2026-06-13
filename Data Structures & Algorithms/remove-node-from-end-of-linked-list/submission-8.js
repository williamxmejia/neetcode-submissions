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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let left = head;
        let right = head;
        let i = 0;
        while (i < n && right) {
            right = right.next;
            i++
        }

        if (right === null) {
            return head.next;
        }

        while (right.next) {
            left = left.next;
            right = right.next;
        }

        left.next = left.next.next;

        return head;
    }
}   
