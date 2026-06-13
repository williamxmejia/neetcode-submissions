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
    merge(a, b) {
        const dummy = new ListNode();
        let cur = dummy;
        while (a && b) {
            let aNext = a.next;
            let bNext = b.next;
            cur.next = a;
            cur = cur.next;
            cur.next = b;
            cur = cur.next;

            a=aNext;
            b=bNext;
        }

        cur.next = a;

        return dummy.next;
    }
    reorderList(head) {
        let length = 0;
        let cur = head;
        while (cur) {
            length++;
            cur = cur.next;
        }
        cur = head;
        for (let i = 0; i < Math.floor(length / 2); i++) {
            cur = cur.next;
        }
        const next = cur.next;
        cur.next = null;
        cur = next;

        const secondHead = this.reverse(cur);
        this.merge(head, secondHead);
    }
}
