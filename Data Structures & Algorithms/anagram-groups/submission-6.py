class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        hashMap = defaultdict(list)
        print(hashMap)
        for s in strs:
            arr = [0] * 26
            for c in s:
                arr[ord(c) - ord('a')] += 1
            hashMap[tuple(arr)].append(s)
        
        return list(hashMap.values())

        