const HashTable = require('./HashTable')

function anagramGrouping(words) {
  const ht = new HashTable()

  for (let i = 0; i < words.length; i++) {
    const key = words[i].split('').sort().join('')
    const value = words[i]

    if (ht.has(key)) {
      ht.set(key, [...ht.get(key), value])
    } else {
      ht.set(key, [value])
    }
  }

  return ht.getValues()
}

module.exports = anagramGrouping
