class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        counter = Counter(nums)

        freq = [[] for _ in range(len(nums) + 1)]

        for n, cnt in counter.items():
            freq[cnt].append(n)

        sol = []
        
        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                sol.append(n)

                if len(sol) >= k:
                    return sol
