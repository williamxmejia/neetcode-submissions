class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        dix = {")": "(", "]":"[", "}":"{"}

        for c in s:
            if c in dix:
                if stack and stack[-1][0] == dix[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)
        
        return True if not stack else False