class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)

        for s in strs:
            word = [0] * 26
            for i in s:
                word[ord(i) - ord('a')] += 1
            res[tuple(word)].append(s)
        return list(res.values())