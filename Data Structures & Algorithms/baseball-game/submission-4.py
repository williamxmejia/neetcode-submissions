class Solution:
    def calPoints(self, operations: List[str]) -> int:
        res = 0
        stack = []

        for c in operations:
            if c == 'C':
                stack.pop()
            elif c == 'D':
                prev = stack[-1]
                stack.append(int(prev) * 2)
            elif c == '+':
                stack.append(int(stack[-1]) + int(stack[-2]))
            else:
                stack.append(int(c))
        
        return sum(stack)