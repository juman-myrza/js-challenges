const HashTable = require('./HashTable')

function wordInstanceCounter(str, word) {
  const ht = new HashTable()

  const words = str.toLowerCase().match(/[a-zA-Z]+/g)

  for (const wordItem of words) {
    if (ht.has(wordItem)) {
      ht.set(wordItem, ht.get(wordItem) + 1)
    } else {
      ht.set(wordItem, 1)
    }
  }

  return ht.get(word) || 0
}

module.exports = wordInstanceCounter
