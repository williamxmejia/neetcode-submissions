class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        sol = [0] * len(temperatures)
        
        for i in range(len(temperatures)):
            length = 1
            for j in range(i+1, len(temperatures)):
                if sol[i] == 0 and temperatures[i] < temperatures[j]:
                    sol[i] = length
                length += 1

        return sol