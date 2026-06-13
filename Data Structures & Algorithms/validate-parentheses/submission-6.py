class Solution:
    def isValid(self, s: str) -> bool:
        dix = {")":"(", "]":"[", "}":"{"}
        stack = []

        for c in s:
            if c in dix:
                if stack and stack[-1] == dix[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)

        
        return True if not stack else False
                