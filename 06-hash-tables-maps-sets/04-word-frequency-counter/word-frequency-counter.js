function wordFrequencyCounter(str) {
  const lowercasedStr = str.toLowerCase()

  const wordsArray = lowercasedStr.match(/[a-zA-Z0-9]+/g)

  const wordsMap = new Map()

  if (wordsArray && wordsArray.length > 0) {
    for (const word of wordsArray) {
      if (wordsMap.has(word)) {
        wordsMap.set(word, wordsMap.get(word) + 1)
      } else {
        wordsMap.set(word, 1)
      }
    }
  }

  return wordsMap
}

module.exports = wordFrequencyCounter
