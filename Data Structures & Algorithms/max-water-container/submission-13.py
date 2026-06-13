class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l, r = 0, len(heights) - 1
        sol = 0

        for i in range(len(heights)):
            for j in range (i + 1, len(heights)):
                area = (j - i) * min(heights[i], heights[j])
                sol = max(area, sol)
        
        return sol

        