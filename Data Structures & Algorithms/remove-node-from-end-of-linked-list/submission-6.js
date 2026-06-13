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
        let dummy = new ListNode();
        dummy.next = head;

        let cur = dummy.next;
        let length = 0;
        while (cur) {
            length++;
            cur = cur.next;
        }

        if (length === n) {
            return head.next;
        }

        cur = head
        let i = 0;
        while (i < length - n - 1) {
            cur = cur.next;
            i++;
        }

        cur.next = cur.next.next;

        return head;
    }
}   
