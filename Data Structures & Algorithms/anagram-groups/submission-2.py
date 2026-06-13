class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = []
        maps = {}
        

        for s in strs:
            word = "".join(sorted(s))
            if word in maps:
                maps[word].append(s)
            else:
                maps[word] = [s]
        
        return [val for _, val in maps.items()]

        