class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        tArr = [0] * 256
        sArr = [0] * 256

        for n in s:
            tArr[ord(n)] += 1
        
        for n in t:
            sArr[ord(n)] += 1

        return tArr == sArr
        