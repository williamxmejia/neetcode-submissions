class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = Counter(nums)

        return list(map(lambda x: x[0], count.most_common(k)))
        