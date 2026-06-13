class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        arr = [[] for _ in range(len(nums) + 1)]
        sol = []
        
        dic = Counter(nums)

        for num, freq in dic.items():
            arr[freq].append(num)

        for i in range(len(arr)-1, -1, -1):
            print(arr[i])
            for j in range(len(arr[i])):
                if len(sol) >= k:
                    return sol
                sol.append(arr[i][j])
        
        return sol
        
                



        