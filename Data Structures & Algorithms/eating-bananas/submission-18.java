class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int l = 1, r = piles[0];
        for (int p : piles) {
            if (p > r) {
                r = p;
            }
        }
        int res = r;

        while (l <= r) {
            int k = l + ((r - l) / 2);
            long totalTime = 0;
            for (int p : piles) {
                totalTime += Math.ceil((double) p / k);
            }
            if (totalTime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1; 
            }
        }

        return res;
    }
}
