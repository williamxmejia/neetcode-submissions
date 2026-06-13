class WordDictionary {
    constructor() {
        this.trie={};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.trie;
        for(const char of word) {
            cur[char] = cur[char] ?? {};
            cur = cur[char];
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    
    search(word) {
        function _search(cur, startIndex) {
            for (let i = startIndex; i < word.length; i++) {
                const char = word[i];

                if (char === '.') {
                    for (const trieKey in cur) {
                        if (trieKey === "endOfWord") { continue }
                        if (_search(cur[trieKey], i + 1)) {
                            return true;
                        }
                    }
                    return false;
                }

                if (!cur[char]) {
                    return false;
                }
                cur = cur[char];
            }

            return cur.endOfWord === true;
        }

        return _search(this.trie, 0);
    }
}
