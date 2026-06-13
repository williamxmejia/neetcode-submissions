class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        sol = [0] * len(temperatures)
        stack = []

        for i in range(len(temperatures)):
            while stack and temperatures[i] > temperatures[stack[-1]]:
                indx = stack.pop()
                sol[indx] = (i - indx)
            stack.append(i)
        
        return sol