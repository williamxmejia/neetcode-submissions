class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        counter = Counter(nums)
        freq = [[] for _ in range(len(nums) + 1)]

        for num, cnt in counter.items():
            freq[cnt].append(num)

        res = []

        for i in range(len(freq) - 1, -1, -1):
            for n in freq[i]:
                res.append(n)

                if len(res) == k:
                    return res       


        print(res)
