class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        sol = [0] * len(temperatures)
        stack = []

        for i, t in enumerate(temperatures):
            while stack and t > stack[-1][0]:
                _, indx = stack.pop()
                sol[indx] = (i - indx)
            stack.append((t, i))
        
        return sol
        