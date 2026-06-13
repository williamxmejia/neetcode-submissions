class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        print(numbers)

        maps = {}
        maps2 = {}
        sol = []

        for i in range(len(numbers)):
            num = target - numbers[i]

            if num in maps:
                return [maps2[num], (i+1)]
            else:
                maps[numbers[i]] = num
            maps2[numbers[i]] = i + 1