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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode();
        let tail = dummy;

        let curA = list1;
        let curB = list2;

        while (curA && curB) {
            if (curA.val < curB.val || curA.val === curB.val) {
                tail.next = curA;
                curA = curA.next;
            } else {
                tail.next = curB;
                curB = curB.next;
            }

            tail = tail.next
        }

        if (!curA) {
            tail.next = curB;
        }

        if (!curB) {
            tail.next = curA;
        }

        return dummy.next;
    }
}
