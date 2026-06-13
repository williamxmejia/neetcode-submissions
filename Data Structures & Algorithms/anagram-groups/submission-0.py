class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hash_map = {}
        sol = []

        for s in strs:
            word = "".join(sorted(s))
            if word in hash_map:
                hash_map[word].append(s)
            else:
                hash_map[word] = [s]

        for i in hash_map.values():
            sol.append(i)
        
        return sol
            
        