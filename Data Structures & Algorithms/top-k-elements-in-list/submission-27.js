class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencies = {}
        for (const num of nums) {
            frequencies[num] = (frequencies[num] ?? 0) + 1;
        }

        const bucket = Array.from({ length: nums.length }, () => []);
        for (const [num, frequency] of Object.entries(frequencies)) {
            bucket[frequency - 1].push(num);
        }
        console.log(bucket);
        const answer = [];
        for (let i = bucket.length - 1; i >= 0 && k > 0; i--) {
            console.log(i);
            while (bucket[i].length > 0  && k > 0) {
                answer.push(bucket[i].pop());
                k--;
            }
        }

        return answer;
    }
}
