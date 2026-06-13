class Solution:

    def encode(self, strs: List[str]) -> str:
        sol = ""
        for s in strs:
            sol += str(len(s)) + "#" + s
        return sol

    def decode(self, s: str) -> List[str]:
        sol = []

        i = 0

        while i < len(s):
            j = i
            
            while s[j] != "#":
                j += 1
            
            length = int(s[i:j])
            sol.append(s[j + 1: length + j + 1])
            i = length + 1 + j

        return sol
