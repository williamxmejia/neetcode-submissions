class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        maps = {}

        for i in s:
            if i in maps:
                maps[i] += 1
            else:
                maps[i] = 1
        
        for i in t:
            if i in maps:
                maps[i] -= 1
            else:
                return False

        for v in maps.keys():
            if maps[v] != 0:
                return False

        # print(maps)
        return True
            
            
        