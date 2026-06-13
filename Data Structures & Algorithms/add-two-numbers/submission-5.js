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
        let dummy = new ListNode();
        let cur = dummy;

        let carry = 0;
        while (l1 || l2) {
            const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
            carry = 0;
            if (sum >= 10) {
                carry = 1;
            }

            cur.next = new ListNode(sum % 10);
            cur = cur.next;

            l1 = l1?.next;
            l2 = l2?.next;
        }

        console.log(carry);
        if (carry) {
            cur.next = new ListNode(carry);
        }

        return dummy.next;
    }
}
