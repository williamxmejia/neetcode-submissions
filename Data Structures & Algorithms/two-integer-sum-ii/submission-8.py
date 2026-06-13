class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # n = len(numbers)

        # for i in range(n):
        #     for j in range(i + 1, n):
        #         if numbers[i] + numbers[j] == target:
        #             return [i+1, j+1]

        l, r = 0, len(numbers) - 1

        while l < r:
            if numbers[l] + numbers[r] == target:
                return [l+1, r+1]
            
            if numbers[l] + numbers[r] < target:
                l +=1 
            else:
                r -= 1
            
        