class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let trustsNoOne = new Set();
        let trustedBy = {};

        for (let i = 1; i < n + 1; i++) {
            trustsNoOne.add(i);
            trustedBy[i] = 0;
        }

        for (const [person, trusts] of trust) {
            trustsNoOne.delete(person);
            trustedBy[trusts]++;
        }

        for (const person of trustsNoOne) {
            if (trustedBy[person] === n -1) {
                return person;
            }
        }

        return -1;
    }
}
