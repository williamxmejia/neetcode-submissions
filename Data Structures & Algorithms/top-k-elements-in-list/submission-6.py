class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = Counter(nums)

        return [nums for nums in map(lambda x: x[0], count.most_common(k))]