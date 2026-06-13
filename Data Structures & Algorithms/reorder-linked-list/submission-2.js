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
     * @return {void}
     */
    reverse(head) {
        let cur = head;
        let prev = null;
        while (cur) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        return prev;
    }

    reorderList(head) {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        const secondHead = this.reverse(slow.next);
        slow.next = null;


        let a = head;
        let b = secondHead;
        while (b) {
            const aNext = a.next;
            const bNext = b.next;

            a.next = b;
            b.next = aNext;

            a = aNext;
            b = bNext;
        }
    }
}
