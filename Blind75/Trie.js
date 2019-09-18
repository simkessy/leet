/* Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
 */
/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.root = {};
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    // You start at the root but as you insert letters you update what your current node is
    // It's either an existing node or a new one
    let currentNode = this.root;

    // Iterate over the word
    word
      .split("")
      .forEach(
        letter =>
          (currentNode = currentNode[letter] = currentNode[letter] || {})
      );

    // You're setting the last node to true because you've completed the word
    currentNode.isWord = true;
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word, isPrefix) {
    // start at the root
    let currentNode = this.root;

    // Loop over node and until you can't find letter
    for (let w of word) {
      // if letter not in root
      if (!currentNode[w]) return false;
      // update current node
      currentNode = currentNode[w];
    }

    // !! because undefined needs to be casted as false
    // Prefix defaulted to true but will return false if the above loop can't find it
    return isPrefix || !!currentNode.isWord;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return this.search(prefix, true);
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
