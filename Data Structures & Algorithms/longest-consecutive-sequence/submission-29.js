class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seenSet = new Set()
        for (const num of nums) {
            seenSet.add(num);
        }

        let answer = 0;

        for (const num of nums) {
            let searchFor = num;
            let sequenceLength = 0;
            while (seenSet.has(searchFor)) {
                sequenceLength++;
                searchFor++;
            }

            answer = Math.max(answer, sequenceLength)
        }

        return answer;
    }
}
