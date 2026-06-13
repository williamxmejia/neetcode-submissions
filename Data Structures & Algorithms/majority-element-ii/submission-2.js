class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const votes = {}
        // var size = Object.keys(myObj).length;
        for (const num of nums) {
            votes[num] = (votes[num] ?? 0) + 1;
            if (Object.keys(votes).length === 3) {
                for (const key in votes) {
                    votes[key]--;
                    if (votes[key] === 0) {
                        delete votes[key];
                    }
                }
            }
        }

        const res = [];
        for (let key in votes) {
            key = Number(key)
            const frequency = nums.filter(x => x === key).length;
            if (frequency > nums.length /3) {
                res.push(key)
            }
        }
        return res;
    }
}
