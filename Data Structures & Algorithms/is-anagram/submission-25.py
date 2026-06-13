class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        sol = [0] * 26

        for c in s:
            sol[ord(c) - ord('a')] += 1
    
        for c in t:
            sol[ord(c) - ord('a')] -= 1
            if sol[ord(c) - ord('a')] < 0:
                return False

        ans = [x for x in sol if x > 0]
        
        
        return True if not ans else False
        