class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let a = 0;
        let b = 0;

        const tmp = [];
        while (a < m && b < n) {
            if (nums1[a] < nums2[b]) {
                tmp.push(nums1[a]);
                a++;
            } else {
                tmp.push(nums2[b]);
                b++;
            }
        }

        while (a < m) {
            tmp.push(nums1[a]);
            a++;
        }
        while (b < n) {
            tmp.push(nums2[b]);
            b++;
        }

        for (let i = 0; i < tmp.length; i++) {
            nums1[i] = tmp[i];
        }

        console.log(tmp);
    }
}
