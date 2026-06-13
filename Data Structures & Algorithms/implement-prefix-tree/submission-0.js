class PrefixTree {
    constructor() {
        this.trie = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.trie;
        for (const char of word) {
            if (cur[char]) {
                cur = cur[char];
            } else {
                cur[char] = {};
                cur = cur[char];
            }
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.trie;
        for (const char of word) {
            if (!cur[char]) {
                return false;
            }

            cur = cur[char];
        }

        return cur.endOfWord === true;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.trie;
        for (const char of prefix) {
            if (!cur[char]) {
                return false;
            }

            cur = cur[char];
        }

        return true;
    }
}
