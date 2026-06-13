class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        minHeap = []

        for x, y in points:
            destination = (x ** 2) + (y ** 2)
            minHeap.append([destination, x, y])
        
        res = []
        heapq.heapify(minHeap)

        while k > 0:
            _, x, y = heapq.heappop(minHeap)
            res.append([x, y])
            k -= 1

        return res