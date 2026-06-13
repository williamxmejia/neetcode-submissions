class Solution {
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const a = new Array(26).fill(0);
        const b = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            a[s1.charCodeAt(i) - 97]++;
            b[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (a[i] === b[i]) matches++;
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) return true;

            let idx = s2.charCodeAt(r) - 97;
            b[idx]++;
            if (b[idx] === a[idx]) matches++;
            else if (b[idx] - 1 === a[idx]) matches--;

            idx = s2.charCodeAt(l) - 97;
            b[idx]--;
            if (b[idx] === a[idx]) matches++;
            else if (b[idx] + 1 === a[idx]) matches--;

            l++;
        }

        return matches === 26;
    }
}
