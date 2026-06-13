class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const occurances = {};
        for (const num of nums) {
            occurances[num] = (occurances[num] ?? 0) + 1;
        }

        console.log(occurances);
        console.log(nums.length / 3);
        const res = [];
        for (const [num, occured] of Object.entries(occurances)) {
            if (occured > nums.length / 3) {
                res.push(Number(num));
            }
        }

        return res;
    }
}
