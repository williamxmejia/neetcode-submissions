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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let a = "";
        let b = "";
        let cur = l1;
        while (cur) {
            a = `${cur.val}${a}`
            cur = cur.next;
        }
        cur = l2;
        while (cur) {
            b = `${cur.val}${b}`
            cur = cur.next;
        }
        const sum = String(parseInt(a, 10) + parseInt(b, 10));

        let dummy = new ListNode();
        cur = dummy;
        for (let i = sum.length - 1; i >= 0; i--) {
            cur.next = new ListNode(sum[i]);
            cur = cur.next;
        }

        return dummy.next;
    }
}
