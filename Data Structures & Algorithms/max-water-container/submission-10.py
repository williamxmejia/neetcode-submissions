class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l, r = 0, len(heights) - 1
        container = 0

        while l < r:
            area = min(heights[l], heights[r]) * (r - l)
            container = max(container, area)
            if heights[l] < heights[r]:
                l += 1
            else:
                r -= 1
            
        return container