class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        res = [0] * 26
        
        for c in s:
            res[ord('a') - ord(c)] += 1
        
        for c in t:
            res[ord('a') - ord(c)] -= 1

        return not any(res)