class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        // sliding window
        // maintain "sum"/total distance of that window to x
        // return the window that wins.

        // tie breaker, prefer left most numbers

        // key is starting index of the window, value is the distance from x
        let lowestPair = [];
        let total = 0;
        for (let i = 0; i < k; i++) {
            total += Math.abs(arr[i] - x);
        }
        lowestPair = [0, total];
        let l = 0;
        for (let r = k; r < arr.length; r++) {
            total -= Math.abs(arr[l] - x);
            l++;
            total += Math.abs(arr[r] - x);

            if (total < lowestPair[1]) {
                lowestPair = [l, total];
            }
        }

        return arr.slice(lowestPair[0], lowestPair[0] + k);
        console.log(lowestPair);
    }
}
