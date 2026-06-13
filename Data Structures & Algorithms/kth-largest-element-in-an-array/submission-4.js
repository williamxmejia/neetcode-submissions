class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        k = nums.length - k;

        function quickSelect(l, r) {
            let pivot = nums[r];
            let p = l;

            for (let i = l; i < r; i++) {
                if (nums[i] <= pivot) {
                    const tmp = nums[p];
                    nums[p] = nums[i];
                    nums[i] = tmp;
                    p++;
                }
            }

            const tmp = nums[p];
            nums[p] = nums[r]
            nums[r] = tmp;

            if (p > k) {
                return quickSelect(l, p - 1);
            } else if (p < k) {
                return quickSelect(p + 1, r);
            } else {
                return nums[p];
            }
        }

        return quickSelect(0, nums.length - 1);
    }
}
