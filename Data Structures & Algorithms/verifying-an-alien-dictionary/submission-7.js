class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        const orderIndex = {};
        for (const [index, char] of Object.entries(order)){
            orderIndex[char] = Number(index);
        }

        for (let i = 0; i < words.length - 1; i++) {
            const word = words[i];
            const nextWord = words[i + 1];

            for (let j = 0; j < word.length; j++) {
                if (j === nextWord.length) {
                    return false;
                }

                if (word[j] !== nextWord[j]) {
                    if (orderIndex[word[j]] > orderIndex[nextWord[j]]) {
                        return false;
                    }
                    break;
                }
            }
        }

        return true;
    }
}
