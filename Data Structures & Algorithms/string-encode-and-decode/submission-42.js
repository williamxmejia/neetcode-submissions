class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ret = "";
        for (const str of strs) {
            ret += `${str.length}#${str}`;
        }
        return ret;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let ret = [];
        let i = 0;
        while (i < str.length) {
            // parse as int until we reached #, skip the int amount, add to ret
            let int = "";
            while (i < str.length && str[i] !== "#") {
                int += str[i];
                i++;
            }
            console.log(int);
            int = parseInt(int, 10);
            i++; // skip #
            console.log(str.substring(i, i + int))
            ret.push(str.substring(i, i + int));
            i += int;
        }
        return ret;
    }
}
