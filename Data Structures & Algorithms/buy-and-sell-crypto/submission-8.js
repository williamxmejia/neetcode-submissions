class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;

        let res = 0;
        while (r < prices.length) {
            res = Math.max(res, prices[r] - prices[l]);

            if (prices[l] > prices[r]) {
                l = r;
            }

            r++;
        }

        return res;
    }
}
